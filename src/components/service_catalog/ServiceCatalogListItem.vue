<template>
  <div class="block px-5 py-5 bg-white rounded-sm">
    <div v-for="state in states" :key="state.id" class="flex relative">
      <img
        :src="state.icon"
        class="pointer-events-none w-5 h-5 transform"
        alt="Search Icon"
      />
      <div class="text-12">{{ state.text }}</div>
    </div>

    <div class="rounded-full w-[6px] h-[6px] bg-[#42D782]"></div>
    <div class="rounded-full w-[6px] h-[6px] bg-[#B6B6BD]"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

//assets
import publishedIconSrc from "@/assets/state_icons/published.svg";
import unpublishedIconSrc from "@/assets/state_icons/unpublished.svg";
import inProgressIconSrc from "@/assets/state_icons/in_progress.svg";

export default defineComponent({
  name: "ServiceCatalogListItem",
  setup() {
    const states = [
      { id: "published", icon: publishedIconSrc, text: "Published to portal" },
      { id: "unpublished", icon: unpublishedIconSrc, text: "Unpublished" },
      { id: "in-progress", icon: inProgressIconSrc, text: "In progress" },
    ];

    return {
      states,
      publishedIconSrc,
      unpublishedIconSrc,
      inProgressIconSrc,
    };
  },
});
</script>

<style lang="scss" scoped></style>
