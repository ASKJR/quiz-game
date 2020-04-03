import { RankingApiService } from '../services/RankingApiService'
const state = {
    ranking: [],
    waitingRanking: false,
}
const getters = {
    ranking(state) {
        return state.ranking;
    },
    waitingRanking(state) {
        return state.waitingRanking;
    }
}

const mutations = {
    updateRanking(state, ranking) {
        state.ranking = ranking;
    },
    waitingRanking(state, payload) {
        state.waitingRanking = payload;
    }
}
const actions = {
    async saveRanking({commit, getters}, name) {
        commit('waitingRanking',true);
        const { balance }  = getters;
        const lastRecordSaved = await RankingApiService.save({name, balance});
        commit('updateRanking');
        commit('waitingRanking',false);
    },
    async loadRanking({commit}) {
        commit('waitingRanking',true);
        const ranking = await RankingApiService.fetch();
        commit('updateRanking', ranking);
        commit('waitingRanking',false);
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}