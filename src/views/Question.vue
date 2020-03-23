<template>
  <div>
    <app-question-stem :stem="stem"></app-question-stem>
    <app-question-alternative
      v-for="(alternative,i) in alternatives"
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
export default {
  data() {
    return {
      stem:
        "Which card is on the cover of the Beta rulebook of &quot;Magic: The Gathering&quot;?",
      alternatives: ["Bog Wraith", "Island", "Rock Hydra", "Elvish Archers"]
    };
  },
  components: {
    appQuestionStem: Stem,
    appQuestionAlternative: Alternative,
    appQuestionNext: Next
  }
};
</script>

<style>
</style>