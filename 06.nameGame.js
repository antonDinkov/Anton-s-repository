function nameGame(input){

let i = 0;
let command = input[i];
i++;
let pointWinner = 0;
let winnerName;

while(command!=='Stop'){
    let temporaryScore = 0;
    for(let j = 0;j < command.length;j++){
        let symbol = command.charCodeAt(j);
        if(symbol===Number(input[i])){
            temporaryScore += 10;
        }else{
            temporaryScore += 2;
        }
        i++;
    }
    if(temporaryScore>=pointWinner){
        winnerName = command;
        pointWinner = temporaryScore;
    }
    command = input[i];
    i++;
}

console.log(`The winner is ${winnerName} with ${pointWinner} points!`)

}
nameGame(["Ivan","73","20","98","110","Ivo","80","65","87","Stop"])