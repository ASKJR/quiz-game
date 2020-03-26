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
            <span class="icon is-small" v-if="alternative.checkedClass.correct != undefined">
              <i class="fas fa-lg fa-check"></i>
            </span>
            <span class="icon is-small" v-if="alternative.checkedClass.wrong != undefined">
              <i class="fas fa-lg fa-times"></i>
            </span>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["alternative"],
  methods: {
    checkAnswer() {
      this.$store.dispatch("checkAnswer", this.alternative.id);
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