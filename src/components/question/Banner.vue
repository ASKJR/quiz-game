<template>
  <div class="columns">
    <div class="column is-half is-offset-3">
      <section class="hero" :class="difficultyStyle">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h2 class="subtitle is-4">REWARD</h2>
            <h1 class="title is-1">{{ value | money }}</h1>
            <h2 class="subtitle is-6">{{ category }}</h2>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: ["value", "difficulty", "category"],
  computed: {
    difficultyStyle() {
      switch (this.difficulty) {
        case "easy":
          return {
            "is-success": true
          };
        case "medium":
          return {
            "is-warning": true
          };
        case "hard":
          return {
            "is-danger": true
          };
        default:
          return {
            "is-primary": true
          };
      }
    }
  }
};
</script>

<style>
</style>