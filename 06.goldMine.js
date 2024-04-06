function goldMine(input){

let locationsNum = Number(input[0]);
let j = 1;

for(let i = 1;i <= locationsNum;i++){
    
    let estimateAverage = Number(input[j]);
    j++;
    let daysPerLocation = Number(input[j]);
    j++
    let resultPerLocation = 0
    for(let k = 1;k <= daysPerLocation;k++){
        let minedGold = Number(input[j]);
        j++;
        resultPerLocation += minedGold;
    }
    let averageMined = resultPerLocation/daysPerLocation;
    if(averageMined >= estimateAverage){
        console.log(`Good job! Average gold per day: ${averageMined.toFixed(2)}.`);
    }else{
        console.log(`You need ${(estimateAverage - averageMined).toFixed(2)} gold.`);
    }
}

}
goldMine(["1", 
"5", 
"3", 
"10", 
"1", 
"3"])