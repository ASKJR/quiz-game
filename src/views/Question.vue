<template>
  <div v-if="question">
    <app-question-value :value="questionValue" :difficulty="question.difficulty"></app-question-value>
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
import Value from "../components/question/Value.vue";
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
    appQuestionValue: Value
  }
};
</script>

<style>
</style>