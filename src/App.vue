<template>
  <div>
    <app-header></app-header>
    <div class="container"></div>
    <app-footer></app-footer>
  </div>
</template>
<script>
import Header from "./components/Header.vue";

import Footer from "./components/Footer.vue";
export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  }
};
</script>
<style>
</style>

