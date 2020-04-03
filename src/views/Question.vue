<template>
  <div>
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
    <app-question-loading :isLoading="loading"></app-question-loading>
  </div>
</template>

<script>
import Stem from "../components/question/Stem.vue";
import Alternative from "../components/question/Alternative.vue";
import Next from "../components/question/Next.vue";
import Banner from "../components/question/Banner.vue";
import Loading from "../components/Loading.vue";
import { mapGetters, mapActions } from "vuex";
import { REWARDS } from "../helper/const";

export default {
  computed: {
    ...mapGetters(["currentQuestion", "currentQuestionIndex", "loading"]),
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
    appQuestionBanner: Banner,
    appQuestionLoading: Loading
  },
  created() {
    if (!this.question) {
      this.$store.dispatch("loadQuestions");
    }
  }
};
</script>

<style>
</style>