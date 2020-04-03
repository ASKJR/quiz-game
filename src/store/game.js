import { REWARDS } from '../helper/const'
const state = {
    balance: 0,
    gameOver: false,
    showNext: false,
    showToast: false,
    winner: false
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
    },
    showToast(state) {
        return state.showToast;
    },
    winner(state) {
        return state.winner;
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

    },
    restart(state) {
        state.balance = 0
        state.gameOver = false,
        state.showNext = false,
        state.ranking =  [],
        state.showNext = false,
        state.winner = false
    },
    showToast(state, payload) {
        state.showToast = payload;
    },
    winner(state, payload) {
        state.winner = payload;
    }
}

const actions = {
    updateBalance({commit, getters}) {
        const  { currentQuestionIndex } = getters
        const balance = REWARDS[currentQuestionIndex];
        commit('updateBalance', balance);
    },
    endGame({commit}) {
        commit('endGame');
    },
    showNext({commit}, showNext) {
        commit('showNext', showNext);
    },
    restart({commit, dispatch}) {
        commit('restart');
        dispatch('setQuestionIndex', 0);
        dispatch('loadQuestions');
        dispatch('loadRanking');

    },
    showToast({commit}, payload) {
        commit('showToast', payload);
    },
    winner({commit}, payload) {
        commit('winner', payload);
    }
    
}

export default {
    state,
    getters,
    mutations,
    actions
}