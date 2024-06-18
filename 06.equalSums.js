function equalSums(input){

let limit = input.length;
for(let i = 0;i < limit;i++){
    let sumLeft = 0;
    let sumRight = 0;
    for(let j = 0;j < i;j++){
        sumLeft += input[j];
    }
    for(let k = limit - 1;k > i;k--){
        sumRight += input[k];
    }
    if(sumLeft == sumRight){
        console.log(i);
        return;
    }
}
console.log('no');

}
equalSums([1,2,3,3]);