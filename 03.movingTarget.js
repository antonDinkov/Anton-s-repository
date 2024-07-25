function movingTarget(shootingArr){

let targets = shootingArr.shift().split(' ').map(Number);
let commands = shootingArr.shift();
while(commands !== 'End'){
    let command = commands.split(' ');
    let toDo = command[0];
    let idx = Number(command[1]);
    switch(toDo){
        case 'Shoot':
        let power = Number(command[2]);
        shoot(targets, idx, power);
            break;
            case 'Add':
                let value = Number(command[2]);
                add(targets, idx, value);
                break;
                case 'Strike':
                    let raddius = Number(command[2]);
                    strike(targets, idx, raddius);
                    break;
    }
    commands = shootingArr.shift();
}
console.log(targets.join('|'));

function shoot(arr,index, power){
    if (index >= 0 && index < arr.length){
        arr[index] -= power;
    }
    if(arr[index] <= 0){
        arr.splice(index, 1);
    }
}

function add(arr, index, value){
    if (index >= 0 && index < arr.length){
        arr.splice(index, 0, value);
    }else{
        console.log('Invalid placement!');
    }
}

function strike(arr, index, radius){// Интересна калкулация, но не е най доброто. Пазя я като пример.
    if((index-radius)<0 || (index+radius)>=arr.length){
        console.log('Strike missed!');
        return;
    }
    let indexesToRemove = [];
    for(let bottom = -radius; bottom <= radius; bottom++){
        let currIdx = index + bottom;
        indexesToRemove.push(currIdx);
    }
    indexesToRemove.sort((a,b) => b -a);
    for(el of indexesToRemove){
        arr.splice(el, 1);
    }
}

}
//movingTarget(['52 74 23 44 96 110', 'Shoot 5 10', 'Shoot 1 80', 'Strike 2 1', 'Add 22 3', 'End']);
movingTarget(['1 2 3 4 5', 'Strike 0 1', 'End']);