<template>
  <img
    v-for="(avatar, index) in versionsAvatars.slice(0, 2)"
    :key="avatar.id"
    :src="avatar.avatar"
    class="rounded-full w-9 h-9 absolute right-4 bottom-0"
    :style="{ 'margin-right': `${index * 20}px` }"
  />
  <div class="absolute bottom-0 right-4">
    <div
      v-if="versionsAvatars.length >= 3"
      class="relative rounded-full w-10 h-10 top-[2px] bg-[#F1F1F8] border-2 border-white mr-[40px]"
    >
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-12/24 font-semibold text-[#777D8A] w-max"
      >
        + {{ versionsAvatars.length - 2 }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, computed } from "vue";

// Types
import Service from "@/types/Service";

const props = defineProps<{
  service: Service;
}>();

const { service } = toRefs(props);

const versionsAvatars = computed(() =>
  service.value.versions?.map((v) => {
    return { id: v.developer?.id, avatar: v.developer?.avatar };
  })
);
</script>

<style></style>
