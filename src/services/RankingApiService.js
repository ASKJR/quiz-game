import { ranking as axios } from "../axios";
import { sortRanking } from "../helper/array"

export const RankingApiService = {
    async save(record) {
        try {
            const response = await axios.post('/ranking.json', record);
            console.log(response);
          } catch (error) {
            console.error(error);
          }
    },
    async fetch() {
        try {
            const response = await axios.get('/ranking.json');
            const { data } = response;
            console.log(data);
            const ranking = [];
            for (let key in data) {
                const record = data[key];
                record.id = key;
                ranking.push(record);
            }
            //limit ranking in 10 positions
            return sortRanking(ranking).slice(0,10);

          } catch (error) {
            console.error(error);
          }
    }
}