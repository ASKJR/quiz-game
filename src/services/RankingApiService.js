import { ranking as axios } from "../axios";

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
            const ranking = [];
            for (let key in data) {
                const record = data[key];
                record.id = key;
                ranking.push(record);
            }
            return ranking;
          } catch (error) {
            console.error(error);
          }
    }
}