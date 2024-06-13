function magicSum(arrInt, n){

for(let i = 0;i < arrInt.length;i++){
    for(let j = i+1;j < arrInt.length;j++){
        let flagman = (arrInt[i] + arrInt[j]) == n;
        if(flagman){
            console.log(`${arrInt[i]} ${arrInt[j]}`);
        }
    }
}

}
magicSum([1,7,6,2,19,23],8);