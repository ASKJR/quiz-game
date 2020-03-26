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
            
        } catch(error) {
            console.log(error);
        }
    },
    incrementQuestionIndex: ({commit}) => {
        commit('incrementQuestionIndex');
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}