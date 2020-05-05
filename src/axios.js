import axios from 'axios';
import { FIREBASE_RANKING_URL, QUIZ_API_BASE_URL, TIMEOUT } from './helper/const'

export const ranking = axios.create({
    baseURL: FIREBASE_RANKING_URL
})

export const quiz = axios.create({
    baseURL: QUIZ_API_BASE_URL
})

quiz.defaults.timeout = TIMEOUT
ranking.defaults.timeout = TIMEOUT

export default {
    ranking,
    quiz
};