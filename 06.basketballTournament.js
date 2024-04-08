function basketballTournament(input){

let i = 0;
let nameTournament = input[i];
i++;
let wins = 0;
let lost = 0;
let gamesTotal = 0;

while(nameTournament!=='End of tournaments'){
    let games = Number(input[i]);
    gamesTotal += games;
    i++;
    let gameNumber = 0
    for(let j = 1;j <= games;j++){
        let desiTeamScore = Number(input[i]);
        i++;
        let oponentTeamScore = Number(input[i]);
        i++;
        gameNumber++;
        if(desiTeamScore>oponentTeamScore){
            wins++;
            console.log(`Game ${gameNumber} of tournament ${nameTournament}: win with ${desiTeamScore-oponentTeamScore} points.`)
        }else if(desiTeamScore<oponentTeamScore){
            lost++;
            console.log(`Game ${gameNumber} of tournament ${nameTournament}: lost with ${oponentTeamScore-desiTeamScore} points.`)
        }
    }
    nameTournament = input[i];
    i++;
}

let winsPercent = (wins/gamesTotal)*100;
let lostPercen = (lost/gamesTotal)*100;

console.log(`${winsPercent.toFixed(2)}% matches win\n${lostPercen.toFixed(2)}% matches lost`);

}
basketballTournament(["Ballers","3","87","63","56","65","75","64","Sharks","4","64","76","65","86","68","99","45","78","End of tournaments"])