<template>
  <div class="status">
    <!-- published -->
    <div v-if="status === 'published'" class="published flex relative">
      <img
        :src="publishedIconSrc"
        class="pointer-events-none w-5 h-5 transform"
        alt="Search Icon"
      />
      <div class="text-12 mt-[2px] ml-2 opacity-70">Published to portal</div>
    </div>

    <!-- unpublished -->
    <div v-if="status === 'unpublished'" class="unpublished flex relative">
      <img
        :src="unpublishedIconSrc"
        class="pointer-events-none w-5 h-5 transform"
        alt="Search Icon"
      />
      <div class="text-12 mt-[2px] ml-2 opacity-70">Unpublished</div>
    </div>

    <!-- pending -->
    <div v-if="status === 'pending'" class="pending flex relative">
      <img
        :src="inProgressIconSrc"
        class="pointer-events-none w-5 h-5 transform"
        alt="Search Icon"
      />
      <div class="text-12 mt-[2px] ml-2 opacity-70">Is pending</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Assets
import publishedIconSrc from "@/assets/state_icons/published.svg";
import unpublishedIconSrc from "@/assets/state_icons/unpublished.svg";
import inProgressIconSrc from "@/assets/state_icons/in_progress.svg";

defineProps<{
  status: string;
}>();
</script>

<style></style>
