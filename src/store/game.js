import { REWARDS } from '../helper/const'
const state = {
    balance: 0,
    gameOver: false,
    showNext: false
}

const getters  = {
    next(state) {
        return state.showNext;
    },
    gameOver(state) {
        return state.gameOver;
    }
}

const mutations = {
    setBalance(state, { currentQuestionIndex }) {
        state.balance = REWARDS[currentQuestionIndex - 1];
    },
    endGame(state) {
        state.gameOver = true;
    },
    showNext(state, showNext) {
        state.showNext = showNext;

    }
}

const actions = {
    setBalance({commit, getters}) {
        commit('setBalance', getters);
    },
    endGame({commit}) {
        commit('endGame');
    },
    showNext({commit}, showNext) {
        commit('showNext', showNext);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}