function bestPlayer(input){

let i = 0
let player;
let command = input[i];
let goals = Number(input[i+1]);
let bestPlayer;
let topGoals = 0;
let secondCommand = false;

while(i<input.length){
    command = input[i];
    if(command !=='END'){
        player = input[i];
        goals = Number(input[i+1]);
        if(goals>topGoals){
            topGoals = goals;
            bestPlayer = player;
            if(topGoals>=10){
                secondCommand = true;break;
            }
        }
    }
    i+=2;
    
}

if(command==='END'||secondCommand===true){
    console.log(`${bestPlayer} is the best player!`);
    if(topGoals>=3){
        console.log(`He has scored ${topGoals} goals and made a hat-trick !!!`);
    }else{
        console.log(`He has scored ${topGoals} goals.`)
    }  
}

}
bestPlayer(['Petrov','2','Drogba','11'])