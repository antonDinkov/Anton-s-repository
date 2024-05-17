function averageNumber(input){

let n = Number(input[0])
let numberSum = 0;
let counter = 0;
for(let i = 1;i<=n;i++){
    let number = Number(input[i]);
    numberSum += number;
    counter++;
}

let averageSum = numberSum/counter;

console.log(averageSum.toFixed(2));

}
averageNumber(['4','3','2','4','2'])