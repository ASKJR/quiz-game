<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item logo" href="#">
        <div>QUIZ GAME</div>
        <!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" /> -->
      </a>

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
        <a class="navbar-item">Prizes</a>

        <a class="navbar-item">Ranking</a>
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