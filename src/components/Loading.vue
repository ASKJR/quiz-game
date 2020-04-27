<template>
  <b-loading :is-full-page="true" :active.sync="isLoading"></b-loading>
</template>

<script>
export default {
  props: ["isLoading"]
};
</script>

<style>
</style>