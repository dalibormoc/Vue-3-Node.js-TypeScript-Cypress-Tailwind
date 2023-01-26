<template>
  <div
    class="modal fixed table top-0 left-0 w-full h-full bg-[#161f31]/90 z-[9998]"
  >
    <div class="align-middle table-cell">
      <div class="max-w-[830px] mx-auto">
        <div class="modal__container relative mx-3 bg-white px-8 py-8 rounded">
          <slot></slot>

          <button class="absolute right-3 top-3" @click="handleClose">
            <img
              :src="plusDarkIconSrc"
              class="rotate-45 w-8 h-8"
              alt="Close Icon"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Assets
import plusDarkIconSrc from "@/assets/plus_dark.svg";

// Emits
const emit = defineEmits<{
  (e: "close"): void;
}>();

const handleClose = (): void => {
  emit("close");
};
</script>

<style lang="scss" scoped>
.modal {
  &__container {
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);
  }
}
</style>
