function wordOccurrences(arr){

let wordsStorage = {};
for (const iterator of arr) {
    if(iterator in wordsStorage){
        wordsStorage[iterator]++;
    }else{
        wordsStorage[iterator] = 1;
    }
}
let arrFromStorage = Object.entries(wordsStorage);
let sortedOutput = arrFromStorage.sort(([word1, count1], [word2, count2]) => count2 - count1);
for (const [word, value] of sortedOutput) {
    console.log(`${word} -> ${value} times`);
}

}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])