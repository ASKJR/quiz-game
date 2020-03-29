import { QuizApiService } from '../services/QuizApiService'
import { EASY_DIFFICULTY, MEDIUM_DIFFICULTY, HARD_DIFFICULTY } from '../helper/const'

const state = {
    questions: [],
    currentQuestionIndex: 0
}

const getters = {
    currentQuestion(state) {
        return state.questions[state.currentQuestionIndex];
    },
    currentQuestionIndex(state) {
        return state.currentQuestionIndex;
    }
}

const mutations = {
    loadQuestions: (state, payload) => {
        state.questions = payload;
    },
    incrementQuestionIndex: (state) => {
        state.currentQuestionIndex++;
    },
    checkAnswer: (state, payload) => {
        payload.correctAlternative.checkedClass = { correct:true }

        if (payload.wrongAlternative) {
            payload.wrongAlternative.checkedClass = { wrong: true }
        }
    }
}

const actions = {
    loadQuestions:  async ({commit}) => {
        try {

            const easyQuestions = await QuizApiService.getQuestions(5, EASY_DIFFICULTY);
            const mediumQuestions = await QuizApiService.getQuestions(5, MEDIUM_DIFFICULTY);
            const hardQuestions = await QuizApiService.getQuestions(5, HARD_DIFFICULTY);
            const questions = [...easyQuestions, ...mediumQuestions, ...hardQuestions];
            
            commit('loadQuestions', questions);

            console.log(questions);
        
            
        } catch(error) {
            console.log(error);
        }
    },
    incrementQuestionIndex: ({commit}) => {
        commit('incrementQuestionIndex');
    },
    checkAnswer:({commit, state, getters, dispatch}, userAlternativeId) => {
        
        if (getters.gameOver || getters.next) {
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
            dispatch('showNext', false);

        } else {
            commit('checkAnswer', {correctAlternative, wrongAlternative: false });
            dispatch('updateBalance');
            dispatch('showNext', true);
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}