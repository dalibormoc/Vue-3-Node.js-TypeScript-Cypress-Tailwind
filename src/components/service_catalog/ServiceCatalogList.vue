<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
    <service-catalog-list-item
      v-for="service in services"
      :key="service.id"
      :service="service"
      @click="handleOpenDetailsModal(service)"
      class="cursor-pointer"
    ></service-catalog-list-item>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from "vue";

// Types
import Service from "@/types/Service";

// Components
import ServiceCatalogListItem from "./ServiceCatalogListItem.vue";

// Props
const props = defineProps<{
  services: Service[];
}>();

const { services } = toRefs(props);

// Emits
const emit = defineEmits<{
  (e: "openDetails", data: Service): void;
}>();

const handleOpenDetailsModal = (service: Service): void => {
  emit("openDetails", service);
};
</script>

<style lang="scss" scoped></style>
