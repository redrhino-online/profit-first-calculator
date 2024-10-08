import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    totalIncome: 0,
    profitPercentage: 0,
    ownerPayPercentage: 0,
    taxPercentage: 0,
    operatingExpensesPercentage: 0,
    allocations: {
      profit: 0,
      ownerPay: 0,
      tax: 0,
      operatingExpenses: 0,
    },
  }),
  getters: {
    remainingPercentage(state) {
      return 100 - state.profitPercentage - state.ownerPayPercentage - state.taxPercentage;
    },
  },
  actions: {
    calculateAllocations() {
      const { totalIncome, profitPercentage, ownerPayPercentage, taxPercentage } = this;
      const operatingExpensesPercentage = this.remainingPercentage;

      this.allocations.profit = (profitPercentage / 100) * totalIncome;
      this.allocations.ownerPay = (ownerPayPercentage / 100) * totalIncome;
      this.allocations.tax = (taxPercentage / 100) * totalIncome;
      this.allocations.operatingExpenses = (operatingExpensesPercentage / 100) * totalIncome;
    },
  },
});
