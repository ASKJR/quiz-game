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
    },
    balance(state) {
        return state.balance;
    }
}

const mutations = {
    updateBalance(state, balance) {
        state.balance = balance;
    },
    endGame(state) {
        state.gameOver = true;
    },
    showNext(state, showNext) {
        state.showNext = showNext;

    }
}

const actions = {
    updateBalance({commit, getters}) {
        const  { currentQuestionIndex } = getters
        const balance = REWARDS[currentQuestionIndex];
        console.log(balance);
        commit('updateBalance', balance);
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