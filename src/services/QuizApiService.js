import { quiz as axios } from "../axios";
import { ALTERNATIVES_LETTERS } from '../helper/const'
import { shuffle } from "../helper/array"
import { v4 as uuidv4 } from 'uuid';


export const QuizApiService  = {
    async getQuestions(amount, difficulty) {
        
        const response = await axios.get('/', { params: { amount, difficulty, type:'multiple' }});
        const questions = response.data.results;
        
        for (let question of questions) {
            
            question.alternatives = [];
            question.alternatives = question.incorrect_answers.map(ia => {
                return { id: uuidv4(), text:ia, is_correct:false, checkedClass:{} };
            })

            question.alternatives.push({ id: uuidv4(), text: question.correct_answer, is_correct : true, checkedClass:{} });
            question.alternatives = shuffle(question.alternatives);
            question.alternatives = question.alternatives.map((qa, index) => {
                qa.letter = ALTERNATIVES_LETTERS[index];
                return qa;
            })
        }
        console.log(questions);

        return questions;
    }
}
