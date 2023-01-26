<template>
  <div class="loading grid grid-cols-1 md:grid-cols-3 gap-10">
    <div
      v-for="item in itemsPerPage"
      :key="item"
      class="loading-item relative block px-7 py-5 bg-white rounded-sm min-h-[232px]"
    >
      <div class="">
        <div class="h-2 bg-gray-200 rounded-full max-w-[120px] mb-5"></div>
      </div>

      <div class="text-20 font-semibold">
        <div class="h-4 bg-gray-200 rounded-full w-48 mb-6"></div>
      </div>
      <div class="mt-[11px] text-13/20 text-[#707888]">
        <div class="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full mb-2.5"></div>
      </div>

      <div class="absolute bottom-5 w-full -mx-7">
        <div class="px-7">
          <div class="h-2 bg-gray-200 rounded-full max-w-[140px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full max-w-[120px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full max-w-[130px] mb-2.5"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Props
const props = defineProps<{
  itemsPerPage: number;
}>();
</script>

<style lang="scss" scoped></style>
