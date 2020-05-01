<template>
  <div class="stem">
    <p class="title" v-html="stemFormatted"></p>
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
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>