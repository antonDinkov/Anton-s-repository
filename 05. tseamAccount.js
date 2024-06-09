function tseamAccount(input){

let peterIsAccount = input[0].split(' ');


let i = 1
let currCommand = input[i];
while(currCommand !== 'Play!'){
    let toDo = currCommand.split(' ');
    let action = toDo[0];
    let object = toDo[1];
    let flagman = false;
    let j = 0
    for(j = 0; j < peterIsAccount.length; j++){
        if(peterIsAccount[j] === object){
            flagman = true;
            break;
        }
    }
    switch(action){
        case 'Install':
        if(!flagman){
            peterIsAccount.push(object);
        };
        break;
            case 'Uninstall':
                if(flagman){
                    peterIsAccount.splice(j, 1);
                }
            break;
                case 'Update':
                    if(flagman){
                        let toUpdate = peterIsAccount[j];
                        peterIsAccount.splice(j, 1);
                        peterIsAccount.push(toUpdate);
                }
                break;
                    case 'Expansion':let subObject = object.split('-');
                    let game = subObject[0];
                    let expan = subObject[1];
                    for(let k = 0; k < peterIsAccount.length; k++){
                        let storedGame = peterIsAccount[k];
                        if(storedGame === game){
                            storedGame += `:${expan}`;
                            peterIsAccount.splice(k+1, 0, storedGame);
                            break;
                        }
                    };
                    break;
    }
    i++;
    currCommand = input[i];
}

console.log(peterIsAccount.join(' '));

}
tseamAccount(['CS WoW Diablo','Install LoL','Uninstall WoW','Update Diablo','Expansion CS-Go','Play!']);