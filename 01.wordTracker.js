function wordTracker(arr){

let signalTokens = arr.shift().split(' ');
let occurrencesObj = {};
for (const iterator of signalTokens) {
        occurrencesObj[iterator] = 0;
}
for (const iterator of arr) {
    if(iterator in occurrencesObj){
        occurrencesObj[iterator]++
    }
}
const output = Object.entries(occurrencesObj).sort(([key1, value1],[key2, value2]) => value2 - value1);;
for (const iterator of output) {
    console.log(`${iterator[0]} - ${iterator[1]}`);
}

}
wordTracker(['this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'])