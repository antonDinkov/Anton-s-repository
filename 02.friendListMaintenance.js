function friendListMaintenance(arr){

let fiendList = arr.shift().split(', ');
let stopCommand = arr.shift();
let blacklistedCounter = 0;
let lostCounter = 0
while(stopCommand !== 'Report'){
    let tokens = stopCommand.split(' ')
    let command = tokens.shift();
    switch(command){
        case 'Blacklist':
            let name = tokens.shift();
            if(fiendList.includes(name)){
                blacklistedCounter++;
                let idx = fiendList.indexOf(name);
                fiendList.splice(idx, 1, 'Blacklisted');
                console.log(`${name} was blacklisted.`);
            }else{
                console.log(`${name} was not found.`);
            }
            break;
            case 'Error':
                let errorIdx = Number(tokens.shift());
                let nameError = fiendList[errorIdx]
                if((errorIdx>=0 && errorIdx<fiendList.length) && fiendList[errorIdx] !== 'Blacklisted' && fiendList[errorIdx] !== 'Lost'){
                    lostCounter++;
                    fiendList.splice(errorIdx, 1, 'Lost');
                    console.log(`${nameError} was lost due to an error.`);
                }
                break;
                case 'Change':
                    let idxToChange = Number(tokens.shift());
                    let currName = fiendList[idxToChange];
                    let newName = tokens.shift();
                    if(idxToChange>=0 && idxToChange<fiendList.length){
                        fiendList.splice(idxToChange, 1, newName);
                        console.log(`${currName} changed his username to ${newName}.`);
                    }
                    break;
    }

    stopCommand = arr.shift()
}

console.log(`Blacklisted names: ${blacklistedCounter}`);
console.log(`Lost names: ${lostCounter}`);
console.log(fiendList.join(' '));

}
friendListMaintenance(['Mike, John, Eddie', 'Blacklist Mike', 'Error 0', 'Report']);
//friendListMaintenance(['Mike, John, Eddie, William', 'Error 3', 'Error 3', 'Change 0 Mike123', 'Report']);
//friendListMaintenance(['Mike, John, Eddie, William', 'Blacklist Maya', 'Error 1', 'Change 4 George', 'Report']);