function gameOfIntervals(input){

let turnsNum = Number(input[0]);
let result = 0;
let interval09 = 0;
let interval1019 = 0;
let interval2029 = 0;
let interval3039 = 0;
let interval4050 = 0;
let invalidNumbers = 0;

for(let i = 1;i <= turnsNum;i++){
    let currentPoint = Number(input[i]);
    if(currentPoint < 0||currentPoint > 50){
        result /= 2;
        invalidNumbers++;
    }else if(currentPoint >=0 && currentPoint <= 9){
        result += (0.2*currentPoint);
        interval09++;
    }else if(currentPoint < 20){
        result += (0.3*currentPoint);
        interval1019++;
    }else if(currentPoint < 30){
    result += (0.4*currentPoint);
    interval2029++;
    }else if(currentPoint < 40){
        result += 50;
        interval3039++;
    }else{
        result += 100;
        interval4050++;
    }
}

console.log(result.toFixed(2));
console.log(`From 0 to 9: ${((interval09/turnsNum)*100).toFixed(2)}%
From 10 to 19: ${((interval1019/turnsNum)*100).toFixed(2)}%
From 20 to 29: ${((interval2029/turnsNum)*100).toFixed(2)}%
From 30 to 39: ${((interval3039/turnsNum)*100).toFixed(2)}%
From 40 to 50: ${((interval4050/turnsNum)*100).toFixed(2)}%
Invalid numbers: ${((invalidNumbers/turnsNum)*100).toFixed(2)}%`);

}
gameOfIntervals(['10','43','57','-12','23','12','0','50','40','30','20'])