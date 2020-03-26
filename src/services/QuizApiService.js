import axios from "axios";
import { QUIZ_API_BASE_URL } from '../helper/const'
import { shuffle } from "../helper/array"
import { ALTERNATIVES_LETTERS } from "../helper/const"

axios.defaults.baseURL = QUIZ_API_BASE_URL;

export const QuizApiService  = {
    async getQuestions(amount, difficulty) {
        
        const response = await axios.get('/', { params: { amount, difficulty, type:'multiple' }});
        const questions = response.data.results;
        
        for (let question of questions) {
            
            question.alternatives = [];
            question.alternatives = question.incorrect_answers.map(ia => {
                return {text:ia, is_correct:false};
            })

            question.alternatives.push({ text: question.correct_answer, is_correct : true});
            question.alternatives = shuffle(question.alternatives);
            question.alternatives = question.alternatives.map((qa, index) => {
                qa.letter = ALTERNATIVES_LETTERS[index];
                return qa;
            })
        }

        return questions;
    }
}
