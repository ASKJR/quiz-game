<template>
  <div class="stem">
    <h1 class="title" v-html="stemFormatted"></h1>
  </div>
</template>

<script>
export default {
  props: ["stem", "questionIndex"],
  computed: {
    stemFormatted() {
      return `${this.questionIndex}. ${this.stem}`;
    }
  }
};
</script>

<style scoped>
.stem {
  padding: 50px;
}
</style>