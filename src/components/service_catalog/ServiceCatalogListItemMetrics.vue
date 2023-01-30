<template>
  <div v-if="service.configured" class="text-12">
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
    <div v-if="service.metrics.uptime" class="flex mb-1">
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
    <div v-if="service.metrics.requests && service.metrics.errors" class="flex">
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

  <div v-else class="text-12">
    <!-- Not configured -->
    <div class="flex mb-1">
      <div
        class="rounded-full w-[6px] h-[6px] bg-[#B6B6BD] self-center mr-2"
      ></div>
      <div class="flex self-center">Not configured with runtime yet</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Types
import Service from "@/types/Service";

// Utils
import numberShortener from "@/utils/numberShortener";

// Props
const props = defineProps<{
  service: Service;
}>();
</script>

<style></style>
