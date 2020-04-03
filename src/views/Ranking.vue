<template>
  <div>
    <div v-if="ranking">
      <h1 class="title is-1 has-text-centered">Ranking</h1>
      <table class="table is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Prize</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user,index) in ranking" :key="user.id">
            <th>{{ index + 1 }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.balance | money }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <app-ranking-loading :isLoading="waitingRanking"></app-ranking-loading>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Loading from "../components/Loading.vue";

export default {
  computed: {
    ...mapGetters(["ranking", "waitingRanking"])
  },
  created() {
    this.$store.dispatch("loadRanking");
  },
  components: {
    appRankingLoading: Loading
  }
};
</script>

<style>
</style>