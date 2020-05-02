<template>
  <nav id="navbar" class="navbar">
    <div class="navbar-brand">
      <router-link :to="{name: 'question'}" tag="a" class="navbar-item logo">
        <div>QUIZ GAME</div>
      </router-link>

      <a class="bd-navbar-icon navbar-item is-hidden-desktop logo" href="#">
        <span class="icon" style="color: #333;">
          <img :src="moneyBagIcon" alt="money bag" />
        </span>
      </a>
      <app-balance :isMobile="true"></app-balance>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="mobileMenu = !mobileMenu"
        :class="{'is-active': mobileMenu}"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div
      id="navbarBasicExample"
      class="navbar-menu"
      @click="mobileMenu = !mobileMenu"
      :class="{'is-active': mobileMenu}"
    >
      <div class="navbar-start">
        <router-link :to="{name:'rewards'}" tag="a" class="navbar-item">Rewards</router-link>
        <router-link :to="{name:'ranking'}" tag="a" class="navbar-item">Ranking</router-link>
      </div>
    </div>

    <div id="navMenuDocumentation" class="navbar-menu">
      <div class="navbar-end">
        <a class="bd-navbar-icon navbar-item logo" href="#">
          <span class="icon" style="color: #333;">
            <img :src="moneyBagIcon" alt="money bag" />
          </span>
        </a>
        <app-balance :isMobile="false"></app-balance>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Balance from "../components/Balance.vue";
export default {
  data() {
    return {
      mobileMenu: false,
      moneyBagIcon: require("../assets/money.svg")
    };
  },
  components: {
    appBalance: Balance
  }
};
</script>

<style scoped>
.navbar-item.logo {
  color: inherit;
  cursor: auto;
  text-decoration: none;
  background-color: transparent !important;
}

.logo > div {
  border: 2px solid;
  font-size: 16px;
  font-weight: 700;
  padding: 2px;
  border-radius: 3px;
}
</style>