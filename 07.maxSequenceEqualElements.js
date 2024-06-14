function maxSequenceEqualElements(input){
let limit = input.length;
let suprimeCounter = 1;
let suprimeNumber;
for(let i = 0;i < limit;i++){
    let counter = 1;
    let currNum = input[i];
    for(let j = i+1;j < limit;j++){
        if(input[j] != currNum){
            break;
        }else{
            counter++;
        }
    }
    if(counter > suprimeCounter){
        suprimeCounter = counter;
        suprimeNumber = currNum;
    }
}
let output = '';
for(let k = 1;k <= suprimeCounter;k++){
    output += suprimeNumber + ' ';
}
console.log(output);

}
maxSequenceEqualElements([2,1,1,2,3,3,2,2,2,1])