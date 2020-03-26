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
import { mapGetters } from "vuex";
import { PRIZES } from "../helper/const";
export default {
  computed: {
    ...mapGetters(["currentQuestion", "currentQuestionIndex"]),
    question() {
      return this.currentQuestion;
    },
    questionIndex() {
      return this.currentQuestionIndex + 1;
    },
    questionValue() {
      return PRIZES[this.currentQuestionIndex];
    }
  },
  components: {
    appQuestionStem: Stem,
    appQuestionAlternative: Alternative,
    appQuestionNext: Next,
    appQuestionBanner: Banner
  }
};
</script>

<style>
</style>