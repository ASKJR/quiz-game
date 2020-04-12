<template>
  <div>
    <div class="columns">
      <div class="column is-half is-offset-3">
        <figure class="image">
          <img :src="rankingImg" alt="ranking trophy" />
        </figure>
        <h6 class="subtitle is-5 has-text-centered">Ranking</h6>
      </div>
    </div>
    <b-table :data="ranking" :hoverable="true" :mobile-cards="true">
      <template slot-scope="props">
        <b-table-column field="id" label="#">
          <strong>{{ props.index + 1 }}</strong>
        </b-table-column>
        <b-table-column field="name" label="User">{{ props.row.name }}</b-table-column>
        <b-table-column field="balance" label="Reward">
          <span
            class="tag is-rounded is-medium"
            :class="tagStyle(props.row.balance)"
          >{{ props.row.balance | money }}</span>
        </b-table-column>
        <b-table-column field="date" label="Date">
          <i>{{ props.row.date | moment("DD/MM/YYYY H:mm:ss")}}</i>
        </b-table-column>
      </template>
      <template slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <b-icon icon="emoticon-sad" size="is-large"></b-icon>
            </p>
            <p>Nothing here.</p>
          </div>
        </section>
      </template>
    </b-table>
    <app-ranking-loading :isLoading="waitingRanking"></app-ranking-loading>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Loading from "../components/Loading.vue";
import { moneyTagStyle } from "../helper/money";
export default {
  data() {
    return {
      rankingImg: require("../assets/ranking.svg")
    };
  },
  computed: {
    ...mapGetters(["ranking", "waitingRanking"])
  },
  methods: {
    tagStyle(balance) {
      return moneyTagStyle(balance);
    }
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