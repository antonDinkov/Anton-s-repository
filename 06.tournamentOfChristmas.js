function tournamentOfChristmas(input){

let days = Number(input[0]);
let daysWinCounter = 0;
let j = 1;
let totalAmmount = 0;

for(let i = 1;i <= days;i++){
    let game = input[j];
    let money = 0;
    let gamesCounterWin = 0;
    while(game !== 'Finish'){
        j++;
        let result = input[j];
        switch(result){
            case 'win':gamesCounterWin++;money += 20;break;
                case 'lose':gamesCounterWin--;break;
        }
        j++;
        game = input[j];
    }
    j++;
    if(gamesCounterWin>0){
        daysWinCounter++;money *= 1.1;
    }else{
        daysWinCounter--;
    }
    totalAmmount += money;
}
if(daysWinCounter>0){
    totalAmmount *= 1.2;
    console.log(`You won the tournament! Total raised money: ${totalAmmount.toFixed(2)}`);
}else{
    console.log(`You lost the tournament! Total raised money: ${totalAmmount.toFixed(2)}`);
}

}
tournamentOfChristmas(["3", 
"darts", 
"lose", 
"handball", 
"lose", 
"judo", 
"win", 
"Finish", 
"snooker", 
"lose", "swimming", 
"lose", 
"squash", 
"lose", 
"table tennis", 
"win", 
"Finish", 
"volleyball", 
"win", 
"basketball", 
"win", 
"Finish"])