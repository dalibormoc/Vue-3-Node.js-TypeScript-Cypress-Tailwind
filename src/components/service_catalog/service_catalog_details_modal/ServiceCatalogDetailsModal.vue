<template>
  <div class="text-[#0B172D] text-16/24 font-semibold">
    Versions ({{ versionsLength }})
  </div>

  <div class="divide-y divide-[#F1F1F5] mt-6">
    <div
      v-for="version in service.versions"
      :key="version.id"
      class="flex flex-row flex-wrap py-2"
    >
      <div
        class="basis-[65px] text-13/24 font-semibold text-[#262626] self-center pr-2"
      >
        v{{ version.name }}
      </div>
      <div class="basis-[45%] text-12 text-[#8A8A8A] self-center pr-2">
        {{ version.description }}
      </div>
      <div class="grow self-center pr-2">
        <service-catalog-details-modal-types
          :type="service.type"
        ></service-catalog-details-modal-types>
      </div>

      <div class="basis-[150px] self-center">
        <div v-if="version.developer" class="flex">
          <img
            :src="version.developer.avatar"
            class="rounded-full w-5 h-5 mr-[6px] mt-[2px]"
          />
          <div>
            <div class="text-13/24 font-semibold">
              {{ shortName(version.developer.name) }}
            </div>
            <div class="text-12 text-[#8A8A8A]">
              {{ moment(version.updated_at).fromNow() }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, computed } from "vue";
import moment from "moment";

// Components
import ServiceCatalogDetailsModalTypes from "./ServiceCatalogDetailsModalTypes.vue";

// Types
import Service from "@/types/Service";

// Props
const props = defineProps<{
  service: Service;
}>();
const { service } = toRefs(props);

// Service versions
const versionsLength = computed(() => service.value.versions.length);

// Methods
const shortName = (name: string): string => {
  const nameArray = name.split(" ");
  if (nameArray.length < 2) return name;

  nameArray[nameArray.length - 1] =
    nameArray[nameArray.length - 1].charAt(0).toUpperCase() + ".";

  return nameArray.join(" ");
};
</script>

<style></style>
