<template>
  <div class="flex">
    <div
      class="bg-[#F8F8FA] text-[#1155CB] text-10 font-medium px-[6px] py-[2px] rounded w-fit mr-1"
      :class="httpBgClass"
    >
      HTTP
    </div>
    <div
      class="bg-[#F8F8FA] text-[#1155CB] text-10 font-medium px-[6px] py-[2px] rounded w-fit"
      :class="restBgClass"
    >
      REST
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

// Props
const prop = defineProps<{
  type: string;
}>();
const { type } = ref(prop).value;

const httpBgClass = computed(() => {
  return {
    "bg-[#BDD3F9]": type === "HTTP",
  };
});

const restBgClass = computed(() => {
  return {
    "bg-[#BDD3F9]": type === "REST",
  };
});
</script>

<style></style>
