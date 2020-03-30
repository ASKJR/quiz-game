<template>
  <div v-if="question">
    <app-question-banner
      :value="questionValue"
      :difficulty="question.difficulty"
      :category="question.category"
    ></app-question-banner>
    <app-question-stem :stem="question.question" :questionIndex="questionIndex"></app-question-stem>
    <app-question-alternative
      v-for="(alternative,i) in question.alternatives"
      :key="i"
      :alternative="alternative"
    ></app-question-alternative>
    <app-question-next></app-question-next>
  </div>
</template>

<script>
import Stem from "../components/question/Stem.vue";
import Alternative from "../components/question/Alternative.vue";
import Next from "../components/question/Next.vue";
import Banner from "../components/question/Banner.vue";
import { mapGetters, mapActions } from "vuex";
import { REWARDS } from "../helper/const";

export default {
  data() {
    return {
      messageCounter: 0
    };
  },
  computed: {
    ...mapGetters(["currentQuestion", "currentQuestionIndex", "gameOver"]),
    question() {
      return this.currentQuestion;
    },
    questionIndex() {
      return this.currentQuestionIndex + 1;
    },
    questionValue() {
      return REWARDS[this.currentQuestionIndex];
    }
  },
  components: {
    appQuestionStem: Stem,
    appQuestionAlternative: Alternative,
    appQuestionNext: Next,
    appQuestionBanner: Banner
  },
  methods: {
    ...mapActions(["saveRanking"]),
    prompt() {
      this.$buefy.dialog.prompt({
        title: "Ranking",
        message: `Type your nickname to save your result in the ranking list.`,
        inputAttrs: {
          placeholder: "e.g. Walter",
          maxlength: 10
        },
        trapFocus: true,
        onConfirm: name => {
          this.saveRanking(name);
        }
      });
    }
  },
  watch: {
    gameOver(state) {
      if (state) {
        if (this.messageCounter == 0) {
          this.$buefy.toast.open({
            duration: 3500,
            message: `GAME OVER`,
            position: "is-bottom",
            type: "is-danger"
          });
          this.messageCounter++;
          setTimeout(() => {
            this.prompt();
          }, 3500);
        }
      }
    }
  }
};
</script>

<style>
</style>