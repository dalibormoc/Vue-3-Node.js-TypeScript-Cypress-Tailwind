<template>
  <div class="relative block px-7 py-5 bg-white rounded-sm min-h-[232px]">
    <div class="flex justify-between">
      <div v-for="state in states" :key="state.id" class="flex relative">
        <img
          :src="state.icon"
          class="pointer-events-none w-5 h-5 transform"
          alt="Search Icon"
        />
        <div class="text-12 mt-[2px] opacity-70">{{ state.text }}</div>
      </div>
      <div class="bg-[#F2F6FE] rounded-full text-[#5888DB] text-13 px-4 py-2">
        2 versions
      </div>
    </div>

    <div class="text-20 font-semibold">{{ service.name }}</div>
    <div class="mt-[11px] text-13/20 text-[#707888]">
      {{ service.description }}
    </div>

    <!-- <div class="rounded-full w-[6px] h-[6px] bg-[#42D782]"></div>
    <div class="rounded-full w-[6px] h-[6px] bg-[#B6B6BD]"></div> -->

    <div class="text-12 absolute bottom-5">
      <!-- Latency -->
      <div v-if="service.metrics.latency" class="flex mb-1">
        <div
          class="rounded-full w-[6px] h-[6px] bg-[#42D782] self-center mr-2"
        ></div>
        <div class="flex self-center">
          <div class="font-semibold mr-1">{{ service.metrics.latency }}ms</div>
          latency
        </div>
      </div>

      <!-- Uptime -->
      <div v-if="service.metrics.latency" class="flex mb-1">
        <div
          class="rounded-full w-[6px] h-[6px] bg-[#42D782] self-center mr-2"
        ></div>
        <div class="flex self-center">
          <div class="font-semibold mr-1">
            {{ (service.metrics.uptime * 100).toFixed(2) }}%
          </div>
          uptime
        </div>
      </div>

      <!-- Requests/Errors -->
      <div
        v-if="service.metrics.requests && service.metrics.errors"
        class="flex"
      >
        <div
          class="rounded-full w-[6px] h-[6px] bg-[#42D782] self-center mr-2"
        ></div>
        <div class="flex self-center">
          <div class="font-semibold mr-1">
            {{ numberShortener(service.metrics.requests) }}
          </div>
          requests ·
          <div class="font-semibold mx-1">
            {{ (service.metrics.errors * 100).toFixed(2) }}%
          </div>
          errors
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs } from "vue";

// Types
import Service from "@/types/Service";

// Assets
import publishedIconSrc from "@/assets/state_icons/published.svg";
import unpublishedIconSrc from "@/assets/state_icons/unpublished.svg";
import inProgressIconSrc from "@/assets/state_icons/in_progress.svg";

// Utils
import numberShortener from "@/utils/numberShortener";

// export default defineComponent({
//   name: "ServiceCatalogListItem",
//   setup() {
//     const states = [
//       { id: "published", icon: publishedIconSrc, text: "Published to portal" },
//       { id: "unpublished", icon: unpublishedIconSrc, text: "Unpublished" },
//       { id: "in-progress", icon: inProgressIconSrc, text: "In progress" },
//     ];

//     return {
//       states,
//       publishedIconSrc,
//       unpublishedIconSrc,
//       inProgressIconSrc,
//     };
//   },
// });

const props = defineProps<{
  service: Service;
}>();

const { service } = toRefs(props);

const states: any[] = [
  { id: "published", icon: publishedIconSrc, text: "Published to portal" },
  // { id: "unpublished", icon: unpublishedIconSrc, text: "Unpublished" },
  // { id: "in-progress", icon: inProgressIconSrc, text: "In progress" },
];
</script>

<style lang="scss" scoped></style>
