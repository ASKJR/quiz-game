<template>
  <div class="columns">
    <div class="column is-half is-offset-3 alternative" @click="checkAnswer">
      <div class="box" :class="alternative.checkedClass">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <span class="title is-4">{{ alternative.letter }}. &nbsp;&nbsp;</span>
              <span v-html="alternative.text"></span>
            </div>
          </div>
          <div class="media-left">
            <span class="icon is-small" v-if="alternative.checkedClass.correct">
              <i class="fas fa-lg fa-check"></i>
            </span>
            <span class="icon is-small" v-if="alternative.checkedClass.wrong">
              <i class="fas fa-lg fa-times"></i>
            </span>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { TOAST_DURATION } from "../../helper/const";
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

        setTimeout(() => {
          this.prompt();
        }, TOAST_DURATION);
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
          this.saveRanking(name);
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