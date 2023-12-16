<template>
  <section class="hero" :class="difficultyStyle">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h2 class="subtitle is-4">REWARD</h2>
        <h1 class="title is-1">{{ value | money }}</h1>
        <h2 class="subtitle is-6">{{ category }}</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["value", "difficulty", "category"],
  computed: {
    difficultyStyle() {
      if (this.difficulty >= 0 && this.difficulty <=4) {
        return {
            "is-success": true
        };
      } else if (this.difficulty >= 5 && this.difficulty <= 9) {
        return {
            "is-warning": true
        };
      } else {
        return {
            "is-danger": true
        };
      }
    }
  }
};
</script>

<style>
</style>