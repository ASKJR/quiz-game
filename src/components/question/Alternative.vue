<template>
  <div class="columns">
    <div class="column is-half is-offset-3">
      <div class="box">
        <span class="title is-4">{{ alternative.letter }}. &nbsp;&nbsp;</span>
        <span v-html="alternative.text"></span>
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