function treasureHunt(treasure){

let loot = treasure.shift().split('|');

let commands = treasure.shift();
while(commands !== 'Yohoho!'){
    let command = commands.split(' ');
    let toDo = command.shift();
    switch(toDo){
        case 'Loot':
            for(el of command){
                if(!loot.includes(el)){
                    loot.unshift(el);
                }
            }
            break;
            case 'Drop':
                let idx = Number(command[0]);
                if(idx >= 0 && idx < loot.length){
                    let droped = loot.splice(idx, 1);
                    loot.push(droped);
                }
                break;
                case 'Steal':
                    let count = Number(command[0]);
                    let stolen = loot.splice(-count);
                    console.log(stolen.join(', '));
                    break;
    }
    commands = treasure.shift();
}

if(loot.length === 0){
    console.log('Failed treasure hunt.');
}else{
    let sum = 0;
    for(el of loot){
        sum += el.length;
    }
    let gain = sum/loot.length;
    console.log(`Average treasure gain: ${gain.toFixed(2)} pirate credits.`);
}

}
//treasureHunt(['Gold|Silver|Bronze|Medallion|Cup', 'Loot Wood Gold Coins', 'Loot Silver Pistol', 'Drop 3', 'Steal 3', 'Yohoho!']);
treasureHunt(['Diamond|Silver|Shotgun|Gold', 'Loot Silver Medals Coal', 'Drop -1', 'Drop 1', 'Steal 6', 'Yohoho!']);