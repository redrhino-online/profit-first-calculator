<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="pa-4">
          <v-card-title>Profit First Calculator</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field label="Total Income" v-model.number="localTotalIncome" type="number"
                required></v-text-field>
              <v-text-field label="Profit Percentage (%)" v-model.number="localProfitPercentage" type="number"
                required></v-text-field>
              <v-text-field label="Owner Pay Percentage (%)" v-model.number="localOwnerPayPercentage" type="number"
                required></v-text-field>
              <v-text-field label="Tax Percentage (%)" v-model.number="localTaxPercentage" type="number"
                required></v-text-field>

              <!-- Display error message if percentages exceed 100% -->
              <v-alert v-if="percentageError" type="error" class="mt-3" dismissible>
                Combined percentages for Profit, Owner Pay, and Tax must be less than 100%.
              </v-alert>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="pa-4">
          <v-card-title>Allocation Breakdown</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item>Profit: ${{ allocations.profit ? allocations.profit.toFixed(2) : '0.00' }}</v-list-item>
              <v-list-item>Owner Pay: ${{ allocations.ownerPay ? allocations.ownerPay.toFixed(2) : '0.00'
                }}</v-list-item>
              <v-list-item>Tax: ${{ allocations.tax ? allocations.tax.toFixed(2) : '0.00' }}</v-list-item>
              <v-list-item>
                Operating Expenses: ${{ allocations.operatingExpenses ? allocations.operatingExpenses.toFixed(2) :
                  '0.00' }}
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list>
              <v-list-item>Total Income: ${{ localTotalIncome ? localTotalIncome.toFixed(2) : '0.00' }}</v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useAppStore } from '@/stores/app';
import { storeToRefs } from 'pinia';
import { ref, watch, computed, onMounted } from 'vue';

export default {
  setup() {
    const store = useAppStore();

    // Use storeToRefs to make the state reactive
    const { totalIncome, profitPercentage, ownerPayPercentage, taxPercentage, allocations } = storeToRefs(store);

    // Create local variables to bind to the form fields
    const localTotalIncome = ref(totalIncome.value);
    const localProfitPercentage = ref(profitPercentage.value);
    const localOwnerPayPercentage = ref(ownerPayPercentage.value);
    const localTaxPercentage = ref(taxPercentage.value);

    const percentageError = computed(() => {
      const combinedPercentage = localProfitPercentage.value + localOwnerPayPercentage.value + localTaxPercentage.value;
      return combinedPercentage >= 100;
    });

    // Load persisted data from localStorage when the component is mounted
    onMounted(() => {
      loadFromLocalStorage();
    });

    // Function to load values from localStorage
    const loadFromLocalStorage = () => {
      const storedProfit = localStorage.getItem('profitPercentage');
      const storedOwnerPay = localStorage.getItem('ownerPayPercentage');
      const storedTax = localStorage.getItem('taxPercentage');

      if (storedProfit) localProfitPercentage.value = parseFloat(storedProfit);
      if (storedOwnerPay) localOwnerPayPercentage.value = parseFloat(storedOwnerPay);
      if (storedTax) localTaxPercentage.value = parseFloat(storedTax);
    };

    // Function to update store values
    const updateStoreValues = () => {
      store.totalIncome = localTotalIncome.value;
      store.profitPercentage = localProfitPercentage.value;
      store.ownerPayPercentage = localOwnerPayPercentage.value;
      store.taxPercentage = localTaxPercentage.value;
      store.calculateAllocations();
    };

    // Function to persist values to localStorage
    const persistToLocalStorage = () => {
      localStorage.setItem('profitPercentage', localProfitPercentage.value);
      localStorage.setItem('ownerPayPercentage', localOwnerPayPercentage.value);
      localStorage.setItem('taxPercentage', localTaxPercentage.value);
    };

    // Watch for changes in the input fields and handle both updating the store and persisting values
    watch([localTotalIncome, localProfitPercentage, localOwnerPayPercentage, localTaxPercentage], () => {
      if (!percentageError.value) {
        updateStoreValues();   // Update Pinia store values
        persistToLocalStorage();  // Persist the new values in localStorage
      }
    });

    return {
      localTotalIncome,
      localProfitPercentage,
      localOwnerPayPercentage,
      localTaxPercentage,
      allocations,
      percentageError,
    };
  },
};
</script>

<style scoped>
.pa-4 {
  padding: 16px;
}

.mt-3 {
  margin-top: 16px;
}
</style>
