<template>
  <label class="relative text-gray-500 focus-within:text-gray-600 block">
    <img
      :src="searchIconSrc"
      class="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-3"
      alt="Search Icon"
    />

    <input
      :value="modelValue"
      @input="handleChange"
      type="text"
      name="search"
      id="search"
      placeholder="Search"
      class="focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-slate-50 form-input border rounded border-[#E7E7EC] py-[10px] h-[44px] px-4 text-14/24 bg-white appearance-none w-full block pl-9 focus:outline-none"
    />
  </label>
</template>

<script lang="ts" setup>
// Assets
import searchIconSrc from "@/assets/search.svg";

// Props
defineProps<{
  modelValue: string;
}>();

// Emits
const emit = defineEmits<{
  (event: "update:modelValue", payload: string): void;
}>();

const handleChange = ($event: Event) =>
  emit("update:modelValue", ($event.target as HTMLInputElement).value);
</script>

<style lang="scss"></style>
