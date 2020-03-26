<template>
  <div>
    <h1 class="title is-1 has-text-centered">Rewards</h1>
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