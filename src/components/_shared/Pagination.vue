<template>
  <div class="pagination flex justify-center text-13/20 mt-6">
    <div class="self-center">
      <button
        class="back-btn relative rounded-full border border-1 border-blue-300 disabled:border-black disabled:opacity-10 px-5 py-5"
        :disabled="!pagination.canGoBack"
        @click="handleGoBack"
      >
        <div
          class="absolute text-[#1456CB] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          ←
        </div>
      </button>
    </div>
    <div class="flex self-center px-6 opacity-70">
      <div class="page-items font-semibold mr-1">
        {{ pagination.from }} to {{ pagination.to }}
      </div>
      of {{ pagination.totalCount }} services
    </div>
    <div class="self-center">
      <button
        class="next-btn relative rounded-full border border-1 border-blue-300 disabled:border-black disabled:opacity-10 px-5 py-5"
        :disabled="!pagination.canGoForward"
        @click="handleGoForward"
      >
        <div
          class="absolute text-[#1456CB] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          →
        </div>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
export interface Pagination {
  totalCount?: number;
  from?: number;
  to?: number;
  canGoBack?: boolean;
  canGoForward?: boolean;
}

// Props
const { pagination } = defineProps<{
  pagination: Pagination;
}>();

//Emits
const emit = defineEmits<{
  (e: "goBack"): void;
  (e: "goForward"): void;
}>();

const handleGoBack = (): void => {
  emit("goBack");
};

const handleGoForward = (): void => {
  emit("goForward");
};
</script>

<style></style>
