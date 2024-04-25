function lettersCombinations(input){

let startInterval = input[0];
let endInterval = input[1];
let avoidLetter = input[2];
let counter = 0;
let combination = '';

for(let i = startInterval.charCodeAt(0); i <= endInterval.charCodeAt(0);i++){
    for(let j = startInterval.charCodeAt(0); j <= endInterval.charCodeAt(0);j++){
        for(let k = startInterval.charCodeAt(0); k <= endInterval.charCodeAt(0);k++){
            if(i !== avoidLetter.charCodeAt(0) && j !== avoidLetter.charCodeAt(0) && k !== avoidLetter.charCodeAt(0)){
                counter++;
                combination += String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k) + ' ';
            }
        }
    }
}
let exitCombination = combination + counter;
console.log(exitCombination);

}
lettersCombinations(['a','c','b'])