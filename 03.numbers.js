function numbers(numberss){

let numberArr = numberss.split(' ').map(Number);
function averageValue(arr){
    let sum = 0;
    for(element of arr){
        sum += element;
    }
    let average = sum/arr.length;
    return average;
}
numberArr.sort((a,b) => b - a);
let greaterThanNums = numberArr.filter(num => num>averageValue(numberArr));

if(greaterThanNums.length > 0){
    let top5 = greaterThanNums.slice(0, 5);//Ако са повече от 5 ми връща първите 5;
    console.log(top5.join(' '));
}else{
    console.log('No');
}

}
numbers('10 20 30 40 50');