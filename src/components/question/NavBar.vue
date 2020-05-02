<template>
  <div>
    <div v-if="next">
      <button class="button is-fullwidth is-link is-large" @click="nextQuestion">
        <strong>
          NEXT&nbsp;
          <font-awesome-icon icon="angle-double-right" />
        </strong>
      </button>
    </div>
    <div v-if="!next && showRestart && (gameOver || winner)">
      <button class="button is-fullwidth is-info is-large" @click="newGame">
        <strong>
          <font-awesome-icon icon="redo-alt" />&nbsp;RESTART
        </strong>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "currentQuestionIndex",
      "next",
      "gameOver",
      "winner",
      "showRestart"
    ])
  },
  methods: {
    ...mapActions(["incrementQuestionIndex", "showNext", "restart"]),
    nextQuestion() {
      this.incrementQuestionIndex();
      this.showNext(false);
    },
    newGame() {
      this.restart();
      this.$router.push({ name: "question" }).catch(err => {});
    }
  }
};
</script>

<style>
</style>