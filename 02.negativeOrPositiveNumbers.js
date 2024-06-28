function negativeOrPositiveNumbers(arr){

const newArr = [];
arr = arr.map(Number);

arr = arr.map(el => {
    if(el < 0){
        return newArr.unshift(el);
    }else{
        return newArr.push(el);
    }
})

console.log(newArr.join('\n'));

}
negativeOrPositiveNumbers(['7','-2','8','9']);