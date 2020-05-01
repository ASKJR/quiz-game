<template>
  <div class="box alternative" :class="alternative.checkedClass" @click="checkAnswer">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <span class="title is-4">{{ alternative.letter }}. &nbsp;&nbsp;</span>
          <span v-html="alternative.text"></span>
        </div>
      </div>
      <div class="media-left">
        <span class="icon" v-if="alternative.checkedClass.correct">
          <font-awesome-icon :icon="['fas','check']" size="lg" />
        </span>
        <span class="icon" v-if="alternative.checkedClass.wrong">
          <font-awesome-icon :icon="['fas','times']" size="lg" />
        </span>
      </div>
    </article>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["alternative"],
  computed: {
    ...mapGetters(["gameOver", "showToast", "winner"])
  },
  methods: {
    ...mapActions(["saveRanking"]),

    checkAnswer() {
      this.$store.dispatch("checkAnswer", this.alternative.id);

      if ((this.gameOver || this.winner) && this.showToast) {
        const message = this.gameOver ? "GAME OVER" : "VICTORY";
        const type = this.gameOver ? "is-danger" : "is-success";
        const position = "is-bottom";

        this.$buefy.toast.open({ message, position, type });
        this.prompt();
      }
    },
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
          const date = new Date().toISOString();
          this.saveRanking({ name, date });
          this.$buefy.toast.open({
            message: "SAVED",
            position: "is-bottom"
          });
        }
      });
    }
  }
};
</script>
<style scoped>
.alternative {
  cursor: pointer;
}
.correct {
  background-color: #69e793;
  border: 1px solid #008000;
}

.wrong {
  border: 1px solid #ff0000;
}
</style>