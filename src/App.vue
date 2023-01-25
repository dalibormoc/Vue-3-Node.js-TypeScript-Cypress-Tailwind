<template>
  <layout>
    <router-view />
  </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// components
import Layout from "@/layout/index.vue";

export default defineComponent({
  name: "App",
  components: {
    Layout,
  },
});
</script>

<style lang="scss"></style>
