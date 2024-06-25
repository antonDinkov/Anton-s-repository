function addAndSubtract(input){

let sum = 0;
let sumNew = 0;
for(let i = 0;i < input.length;i++){
    sum += input[i];
    if(input[i]%2 == 0){
        input[i] += i;
    }else{
        input[i] -= i;
    }
    sumNew += input[i];
}
console.log(input);
console.log(sum);
console.log(sumNew);

}
addAndSubtract([5,15,23,56,35])