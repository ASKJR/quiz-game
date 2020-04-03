<template>
  <b-loading :is-full-page="true" :active.sync="isLoading">
    <b-icon pack="fas" icon="sync-alt" size="is-large" custom-class="fa-spin"></b-icon>
  </b-loading>
</template>

<script>
export default {
  props: ["isLoading"]
};
</script>

<style>
</style>