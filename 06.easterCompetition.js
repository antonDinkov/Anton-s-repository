function easterCompetition(input){

let pancakeNum = Number(input[0]);
let j = 1;
let bakerName = input[j];
let bestBaker;
let topScore = 0;

for(let i = 1;i <= pancakeNum;i++){
    let totalScore = 0;
    j++;
    let command = input[j];
    while(command!=='Stop'){
        let score = Number(command);
        totalScore += score;
        j++;
        command = input[j];
    }
    console.log(`${bakerName} has ${totalScore} points.`);
    if(totalScore>topScore){
        topScore = totalScore;
        bestBaker = bakerName;
        console.log(`${bakerName} is the new number 1!`);
    }
    j++;
    bakerName = input[j];
}

console.log(`${bestBaker} won competition with ${topScore} points!`);

}
easterCompetition(["2","Chef Angelov","9","9","9","Stop","Chef Rowe","10","10","10","10","Stop"])