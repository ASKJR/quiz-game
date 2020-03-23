<template>
  <div class="columns">
    <div class="column is-half is-offset-3">
      <div class="box">
        <p v-html="alternative"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["alternative"]
};
</script>

<style>
</style>