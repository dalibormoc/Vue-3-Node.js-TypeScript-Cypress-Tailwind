<template>
  <service-catalog />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ServiceCatalog from '@/components/service_catalog/ServiceCatalog.vue'

export default defineComponent({
  name: 'PageHome',
  components: {
    ServiceCatalog,
  },
})
</script>
