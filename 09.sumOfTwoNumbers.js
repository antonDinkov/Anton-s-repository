function sumOfTwoNumbers(input){

let startInterval = Number(input[0]);
let endInterval = Number(input[1]);
let magicNumber = Number(input[2]);
let counter = 0;

for(let i = startInterval;i <= endInterval;i++){
    for(let j = startInterval;j <= endInterval;j++){
        counter++;
        if(i+j === magicNumber){
            console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
            return;
        }
    }
}

console.log(`${counter} combinations - neither equals ${magicNumber}`);

}
sumOfTwoNumbers(['1','10','5'])