function theMostPowerfulWord(input){


let i = 0;
let command = input[i];
let powerfulWord;
let powerfulWordSum = 0

while(command!=='End of words'){
    let wordSum = 0;
    for(let j = 0;j<command.length;j++){
        let symbolNum = command.charCodeAt(j);
        wordSum += symbolNum;
    }
    if(command[0]==='a'||command[0]==='e'||command[0]==='i'||command[0]==='o'||command[0]==='u'||command[0]==='y'||
    command[0]==='A'||command[0]==='E'||command[0]==='I'||command[0]==='O'||command[0]==='U'||command[0]==='Y'){
        wordSum *= command.length;
    }else{
        wordSum /= command.length;
    }
    if(wordSum>powerfulWordSum){
        powerfulWordSum = wordSum;
        powerfulWord = command;
    }
    i++;
    command = input[i];
}

console.log(`The most powerful word is ${powerfulWord} - ${powerfulWordSum}`);

}
theMostPowerfulWord(["The","Most","Powerful","Word","Is","Experience","End of words"])