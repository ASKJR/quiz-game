/** https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 * credits: Laurens Holst
*/
export const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const sortRanking = (ranking) => {
    return ranking.sort((a,b) => (a.balance > b.balance) ? -1 : (b.balance > a.balance) ? 1 : 0);
}