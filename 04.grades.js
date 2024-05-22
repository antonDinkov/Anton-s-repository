function grades(input){

let sudentNum = Number(input[0]);
let topStudents = 0;
let goodStudents = 0;
let midStudents = 0;
let failStudents = 0;
let resultAcumulative = 0;

for(let i = 1;i <= sudentNum;i++){
    let currentResult = Number(input[i]);
    resultAcumulative += currentResult;
    if(currentResult >= 5.00){
        topStudents++;
    }else if(currentResult >= 4.00){
        goodStudents++;
    }else if(currentResult >= 3.00){
        midStudents++;
    }else{
        failStudents++;
    }
}

let topPercentage = ((topStudents/sudentNum)*100).toFixed(2);
let goodPercentage = ((goodStudents/sudentNum)*100).toFixed(2);
let midPercentage = ((midStudents/sudentNum)*100).toFixed(2);
let failPercentage = ((failStudents/sudentNum)*100).toFixed(2);
let averageResult = (resultAcumulative/sudentNum).toFixed(2);

console.log(`Top students: ${topPercentage}%
Between 4.00 and 4.99: ${goodPercentage}%
Between 3.00 and 3.99: ${midPercentage}%
Fail: ${failPercentage}%
Average: ${averageResult}`);

}
grades(['10','3','2.99','5.68','3.01','4','4','6.00','4.50','2.44','5'])