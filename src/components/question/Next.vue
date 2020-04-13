<template>
  <div v-if="next">
    <button class="button is-fullwidth is-link is-large" @click="nextQuestion">
      <strong>NEXT QUESTION</strong>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["currentQuestionIndex", "next"])
  },
  methods: {
    ...mapActions(["incrementQuestionIndex", "showNext"]),
    nextQuestion() {
      this.incrementQuestionIndex();
      this.showNext(false);
    }
  }
};
</script>

<style>
</style>