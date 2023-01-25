<template>
  <Header></Header>

  <div class="max-w-[1366px] mx-auto px-5">
    <main>
      <slot></slot>
    </main>

    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
  name: "AppLayout",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss"></style>
