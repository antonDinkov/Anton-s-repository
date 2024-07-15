function bombNumbers(specialNums, bombNums){

const bomb = bombNums.shift();
const power = bombNums.shift();

for (let i = 0; i < specialNums.length; i++) {
    let currNum = specialNums[i];
    if(currNum === bomb){
        let deleteFrom = i - power;
        let toDeleteBefore = power;
        let toDeleteAfter = power +1;
        if(deleteFrom < 0){
            let negativeNum = deleteFrom;
            deleteFrom = 0;
            toDeleteBefore = power+negativeNum;    // Важна калкулация за запомняне!specificNum е отрицателно число!
        }
        let deleteCount = toDeleteBefore+toDeleteAfter;
        if(deleteCount + deleteFrom > specialNums.length){  //Може и без този if, но запазвам калкулацията като пример за в бъдеще!
            deleteCount = specialNums.length - deleteFrom;
        }
        specialNums.splice(deleteFrom, deleteCount);
        i = deleteFrom - 1;
    }
}

let sum = 0;
for(num of specialNums){
    sum += num;
}
console.log(sum);

}
bombNumbers([1,4,2,2,2,2,9], [4,2]);