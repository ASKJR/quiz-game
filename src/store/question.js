import { QuizApiService } from '../services/QuizApiService'
import { EASY_DIFFICULTY, MEDIUM_DIFFICULTY, HARD_DIFFICULTY } from '../helper/const'

const state = {
    questions: [],
    currentQuestionIndex: 0,
    loading: false
}

const getters = {
    currentQuestion(state) {
        return state.questions[state.currentQuestionIndex];
    },
    currentQuestionIndex(state) {
        return state.currentQuestionIndex;
    },
    loading(state) {
        return state.loading;
    }
}

const mutations = {
    loadQuestions: (state, payload) => {
        state.questions = payload;
    },
    loading: (state, payload) => {
        state.loading = payload;
    },
    incrementQuestionIndex: (state) => {
        state.currentQuestionIndex++;
    },
    setQuestionIndex: (state, index) => {
        state.currentQuestionIndex = index;
    },
    checkAnswer: (state, payload) => {
        payload.correctAlternative.checkedClass = { correct:true, animated: true, flash: true };

        if (payload.wrongAlternative) {
            payload.wrongAlternative.checkedClass = { wrong: true, animated: true, shake: true };
            payload.correctAlternative.checkedClass = { correct:true };
        }
    }
}

const actions = {
    loadQuestions:  async ({commit}) => {
        try {
            commit('loading', true);
            const easyQuestions = await QuizApiService.getQuestions(5, EASY_DIFFICULTY);
            const mediumQuestions = await QuizApiService.getQuestions(5, MEDIUM_DIFFICULTY);
            const hardQuestions = await QuizApiService.getQuestions(5, HARD_DIFFICULTY);
            const questions = [...easyQuestions, ...mediumQuestions, ...hardQuestions];
            
            commit('loadQuestions', questions);
            commit('loading', false);
            //console.log(questions);
        
            
        } catch(error) {
            console.log(error);
            commit('loading', false);
        }
    },
    loading: ({commit}, payload) => {
        commit('loading', payload);
    },
    incrementQuestionIndex: ({commit}) => {
        commit('incrementQuestionIndex');
    },
    setQuestionIndex: ({commit}, index) => {
        commit('setQuestionIndex', index);
    },
    checkAnswer:({commit, state, getters, dispatch}, userAlternativeId) => {
        
        if (getters.gameOver || getters.next || getters.winner) {
            dispatch('showToast', false);
            return;
        }

        const { alternatives } = state.questions[state.currentQuestionIndex];
        
        const correctAlternative = alternatives.find(alternative => {
            return alternative.is_correct;
        });
        
        if (correctAlternative.id != userAlternativeId) {

            const wrongAlternative = alternatives.find(alternative => {
                return userAlternativeId == alternative.id;
            });
            
            commit('endGame');
            commit('checkAnswer', {correctAlternative, wrongAlternative });
            dispatch('showToast', true);
            dispatch('showNext', false);

        } else {
        
            commit('checkAnswer', {correctAlternative, wrongAlternative: false });
            dispatch('updateBalance');
            
            //last question check. Verify if user is a millionaire.
            if (state.currentQuestionIndex + 1 == state.questions.length) {
                dispatch('winner', true);
                dispatch('showToast', true);
                dispatch('showNext', false);

            } else {
                dispatch('showNext', true);
            }
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}