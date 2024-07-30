function manOWar(arr){

let pirat = arr.shift().split('>').map(Number);
let warShip = arr.shift().split('>').map(Number);
let healthLimit = Number(arr.shift());
let stop = 'Retire';
let i = 0;
let command = arr[i];
while(command !== stop){
    let arrCommand = command.split(' ');
    let currCommand = arrCommand.shift();
    arrCommand = arrCommand.map(Number);
    let check;
    switch(currCommand){
        case 'Fire':
            check = fire(arrCommand, warShip);
            break;
            case 'Defend':
                check = defend(arrCommand, pirat);
                break;
                case 'Repair':
                    repair(arrCommand, pirat, healthLimit);
                    break;
                    case 'Status':
                        status(pirat, healthLimit);
                        break;
    }
    if(check){
        return;
    }
    i++;
    command = arr[i];
}
console.log(`Pirate ship status: ${outputSumHealth(pirat)}\nWarship status: ${outputSumHealth(warShip)}`);

function fire(parameters, ship){
    let idx = parameters[0];
    let damage = parameters[1];
    if(idx<0 || idx >= ship.length){
        return false;
    }else{
        ship[idx] -= damage;
        if(ship[idx] <= 0){
            console.log('You won! The enemy ship has sunken.');
            return true;
        }else{
            return false;
        }
    }
}

function defend(parameters, ship){
    let startIdx = parameters[0];
    let endIdx = parameters[1];
    let damage = parameters[2];
    if(startIdx < 0 || startIdx >= ship.length || endIdx < 0 || endIdx >= ship.length){
        return false;
    }else{
        for(let i = startIdx; i <= endIdx; i++){
            ship[i] -= damage;
            if(ship[i] <= 0){
                console.log('You lost! The pirate ship has sunken.');
                return true;
            }
        }
        return false;
    }
}

function repair(parameters, ship, limit){
    let idx = parameters[0];
    let health = parameters[1];
    if(idx < 0 || idx >= ship.length){
        return;
    }else{
        ship[idx] += health;
        if(ship[idx] > limit){
            ship[idx] = limit;
        }
    }
}

function status(ship, limit){
    let counter = 0
    for(section of ship){
        if(section < limit*0.20){
            counter++;
        }
    }
    if(counter === 0){
        return;
    }else{
        console.log(`${counter} sections need repair.`);
    }
}

function outputSumHealth(ship){
    let sum = 0;
    for(section of ship){
        sum += section;
    }
    return sum;
}

}
manOWar(['12>13>11>20>66','12>22>33>44>55>32>18','70','Fire 2 11','Fire 8 100','Defend 3 6 11','Defend 0 3 5','Repair 1 33','Status','Retire']);