<template>
  <v-footer height="40" app>
    <a v-for="item in items" :key="item.title" :href="item.href" :title="item.title"
      class="d-inline-block mx-2 social-link" rel="noopener noreferrer" target="_blank">
      <v-icon :icon="item.icon" :size="item.icon === '$vuetify' ? 24 : 16" />
    </a>

    <div class="text-caption text-disabled" style="position: absolute; right: 16px;">
      &copy; {{ (new Date()).getFullYear() }}
      —
      <a class="text-decoration-none on-surface" href="https://redrhino.online/" rel="noopener" target="_blank">
        RED RHINO, LLC
      </a>
    </div>
  </v-footer>
</template>

<script setup>
const items = [
  {
    title: 'RED RHINO',
    icon: `mdi-office-building`,
    href: 'https://redrhino.online/',
  }, {
    title: 'Dave Mainville',
    icon: `mdi-account-cowboy-hat`,
    href: 'https://davemainville.com/',
  },
]
</script>

<style scoped lang="sass">
  .social-link :deep(.v-icon)
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
    text-decoration: none
    transition: .2s ease-in-out

    &:hover
      color: rgba(25, 118, 210, 1)
</style>
