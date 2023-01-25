<template>
  <div class="relative block px-7 py-5 bg-white rounded-sm min-h-[232px]">
    <div class="flex justify-between">
      <service-catalog-list-item-status
        :status="status"
      ></service-catalog-list-item-status>
      <div
        v-if="versionsLength"
        class="bg-[#F2F6FE] rounded-full text-[#5888DB] text-13 px-4 py-2"
      >
        {{ versionsCountString }}
      </div>
    </div>

    <div class="text-20 font-semibold">{{ service.name }}</div>
    <div class="mt-[11px] text-13/20 text-[#707888] truncate">
      {{ service.description }}
    </div>

    <div class="absolute bottom-5 w-full -mx-7">
      <div class="flex justify-between px-7">
        <div>
          <service-catalog-list-item-metrics
            :service="service"
          ></service-catalog-list-item-metrics>
        </div>
        <div class="justify-end">
          <service-catalog-list-item-avatar
            v-if="service.published"
            :service="service"
          ></service-catalog-list-item-avatar>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs } from "vue";

// Components
import ServiceCatalogListItemStatus from "./ServiceCatalogListItemStatus.vue";
import ServiceCatalogListItemMetrics from "./ServiceCatalogListItemMetrics.vue";
import ServiceCatalogListItemAvatar from "./ServiceCatalogListItemAvatar.vue";

// Types
import Service from "@/types/Service";

const props = defineProps<{
  service: Service;
}>();
const { service } = toRefs(props);

// Service versions
const versionsLength = computed(() => service.value.versions.length);
const versionsCountString = computed(
  () =>
    `${versionsLength.value} ${
      versionsLength.value > 1 ? "versions" : "version"
    }`
);

// Status indicator
const status = computed(() => {
  if (service.value.configured && service.value.published) return "published";
  if (service.value.configured) return "unpublished";

  return "pending";
});
</script>

<style lang="scss" scoped></style>
