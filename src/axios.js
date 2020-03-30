import axios from 'axios';
import { FIREBASE_RANKING_URL, QUIZ_API_BASE_URL } from './helper/const'

export const ranking = axios.create({
    baseURL: FIREBASE_RANKING_URL
})

export const quiz = axios.create({
    baseURL: QUIZ_API_BASE_URL
})

//instance.defaults.headers.common['SOMETHING'] = 'SOMETHING';

export default {
    ranking,
    quiz
};