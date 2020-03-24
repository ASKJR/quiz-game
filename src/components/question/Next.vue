<template>
  <div class="columns" v-if="currentQuestionIndex != 14">
    <div class="column is-half is-offset-3">
      <button class="button is-fullwidth is-link is-large" @click="nextQuestion">
        <strong>NEXT QUESTION</strong>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["currentQuestionIndex"])
  },
  methods: {
    nextQuestion() {
      this.$store.dispatch("incrementQuestionIndex");
    }
  }
};
</script>

<style>
</style>