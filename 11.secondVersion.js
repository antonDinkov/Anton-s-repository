function oddEvenPosition(input){

let valueNums = Number(input[0]);
let oddSum = 0;
let minValueOdd = Number.MAX_SAFE_INTEGER;
let maxValueOdd = Number.MIN_SAFE_INTEGER;
let evenSum = 0;
let minValueEven = Number.MAX_SAFE_INTEGER;
let maxValueEven = Number.MIN_SAFE_INTEGER;

for(i = 1;i <= valueNums;i++){
    let currentValue = Number(input[i]);
    if(i%2!==0){
        oddSum += currentValue;
        if(currentValue <= minValueOdd){
            minValueOdd = currentValue;
        }
        if(currentValue >= maxValueOdd){
            maxValueOdd = currentValue;
        }
    }else{
        evenSum += currentValue;
        if(currentValue <= minValueEven){
            minValueEven = currentValue;
        }
        if(currentValue >= maxValueEven){
            maxValueEven = currentValue;
        }
    }
}

console.log(`OddSum=${oddSum.toFixed(2)},`);

if(minValueOdd >= Number.MAX_SAFE_INTEGER){
    console.log('OddMin=No,\nOddMax=No,')
}else{
    console.log(`OddMin=${minValueOdd.toFixed(2)},
OddMax=${maxValueOdd.toFixed(2)},`)
}

console.log(`EvenSum=${evenSum.toFixed(2)},`);

if(minValueEven >= Number.MAX_SAFE_INTEGER){
    console.log('EvenMin=No,\nEvenMax=No');
}else{
    console.log(`EvenMin=${minValueEven.toFixed(2)},
EvenMax=${maxValueEven.toFixed(2)}`)
}

}
oddEvenPosition(['2','1','1'])
//oddEvenPosition(['0'])
//oddEvenPosition(['1','1'])
//oddEvenPosition(['6','2','3','5','4','2','1']);