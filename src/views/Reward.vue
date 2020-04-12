<template>
  <div>
    <div class="columns">
      <div class="column is-half is-offset-3">
        <figure class="image">
          <img :src="rewardImg" alt="golden chest" />
        </figure>
        <h6 class="subtitle is-5 has-text-centered">Rewards</h6>
      </div>
    </div>
    <table class="table is-striped is-narrow is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>
            <abbr title="Position">#</abbr>
          </th>
          <th>Reward</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>
            <abbr title="Position">#</abbr>
          </th>
          <th>Reward</th>
        </tr>
      </tfoot>
      <tbody>
        <tr
          v-for="(prize,index) in rewards"
          :key="index"
          :class="{'is-selected': index + 1 == (rewards.length - currentQuestionIndex)}"
        >
          <th>{{ rewards.length - index }}</th>
          <td>{{ prize | money }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { REWARDS } from "../helper/const";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      rewardImg: require("../assets/reward.svg")
    };
  },
  computed: {
    ...mapGetters(["currentQuestionIndex"]),
    rewards() {
      return REWARDS.slice().reverse();
    }
  }
};
</script>

<style scoped>
.is-selected {
  background-color: hsl(204, 86%, 53%) !important;
  font-weight: bold;
}
</style>