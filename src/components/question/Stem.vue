<template>
  <div>
    <div class="columns stem">
      <div class="column is-half is-offset-3">
        <h1 class="title" v-html="stem"></h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stem"]
};
</script>

<style scoped>
.stem {
  padding: 50px;
}
</style>