<template>
  <div>
    <div v-if="question && !loading" :class="animation">
      <app-question-banner
        :value="questionValue"
        :difficulty="questionIndex"
        :category="question.category"
      ></app-question-banner>
      <app-question-stem :stem="question.question" :questionIndex="questionIndex"></app-question-stem>
      <app-question-alternative
        v-for="(alternative,i) in question.alternatives"
        :key="i"
        :alternative="alternative"
      ></app-question-alternative>
      <app-question-navbar></app-question-navbar>
    </div>
    <div v-if="typeof question === 'undefined' && !loading">
      <app-error></app-error>
    </div>
    <app-question-loading :isLoading="loading"></app-question-loading>
  </div>
</template>

<script>
import Stem from "../components/question/Stem.vue";
import Alternative from "../components/question/Alternative.vue";
import NavBar from "../components/question/NavBar.vue";
import Banner from "../components/question/Banner.vue";
import Loading from "../components/Loading.vue";
import { mapGetters, mapActions } from "vuex";
import { REWARDS } from "../helper/const";

export default {
  data() {
    return {
      animation: { animated: !this.next, fadeInRight: !this.next }
    };
  },
  computed: {
    ...mapGetters([
      "currentQuestion",
      "currentQuestionIndex",
      "loading",
      "next"
    ]),
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
  watch: {
    next(show) {
      this.animation = { animated: !show, fadeInRight: !show };
      setTimeout(() => {
        this.animation = {};
      }, 1000);
    }
  },
  components: {
    appQuestionStem: Stem,
    appQuestionAlternative: Alternative,
    appQuestionNavbar: NavBar,
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