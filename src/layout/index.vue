<template>
  <Header></Header>

  <div class="max-w-[1366px] mx-auto px-5">
    <main>
      <slot></slot>
    </main>

    <Footer></Footer>
  </div>
</template>

<script lang="ts" setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>

<style lang="scss"></style>
