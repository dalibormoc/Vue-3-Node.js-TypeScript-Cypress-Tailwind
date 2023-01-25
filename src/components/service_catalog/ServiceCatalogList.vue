<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
    <service-catalog-list-item
      v-for="service in services"
      :key="service.id"
      :service="service"
    ></service-catalog-list-item>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, toRefs } from "vue";

// types
import Service from "@/types/Service";

// components
import ServiceCatalogListItem from "./ServiceCatalogListItem.vue";

// composables
// import { usePagination } from "@/composables/useClientSidePagination";

const props = defineProps<{
  services: Service[];
}>();

const { services } = toRefs(props);

// const { paginatedArray, ...paginationSettings } = usePagination<any>({
//   itemsPerPage: 9,
//   arrayToPaginate: services.value,
//   currentPage: 1,
// });
</script>

<style lang="scss" scoped></style>
