<template>
  <animated-number
    :value="balance"
    :formatValue="formatToPrice"
    :duration="1000"
    class="bd-navbar-icon navbar-item"
    :class="mobile"
  />
</template>

<script>
import { mapGetters } from "vuex";
import AnimatedNumber from "animated-number-vue";

export default {
  props: ["isMobile"],

  components: {
    AnimatedNumber
  },
  computed: {
    ...mapGetters(["balance"]),
    mobile() {
      return this.isMobile ? { "is-hidden-desktop": true } : {};
    }
  },
  methods: {
    formatToPrice(value) {
      return `<p>${this.$options.filters.money(value)}</p>`;
    }
  }
};
</script>

<style>
</style>