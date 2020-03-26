<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link :to="{name: 'question'}" tag="a" class="navbar-item logo">
        <div>QUIZ GAME</div>
      </router-link>
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
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mobileMenu: false
    };
  }
};
</script>

<style scoped>
.navbar-item.logo {
  text-decoration: inherit;
  color: inherit;
  cursor: auto;
}
.logo > div {
  border: 2px solid;
  font-size: 16px;
  font-weight: 700;
  padding: 2px;
  border-radius: 3px;
}
</style>