<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <div class="column">
        <div class="column is-half is-offset-3">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
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

