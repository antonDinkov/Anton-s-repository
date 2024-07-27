function inventory(arrCollection){

let collection = arrCollection.shift().split(', ');
let commands = arrCollection.shift();
while(commands !== 'Craft!'){
    let command = commands.split(' - ');
    let toDo = command[0];
    let item = command[1];
    switch(toDo){
        case 'Collect':
            if(!collection.includes(item)){
                collection.push(item);
            }
            break;
            case 'Drop':
                if(collection.includes(item)){
                    let idxItem = collection.indexOf(item);
                    collection.splice(idxItem, 1);
                }
                break;
                case 'Combine Items':
                    let oldItem = item.split(':')[0];
                    if(collection.includes(oldItem)){
                        let toPutIn = item.split(':')[1];
                        let idxOldItem = collection.indexOf(oldItem);
                        collection.splice((idxOldItem+1), 0, toPutIn);
                    }
                    break;
                    case 'Renew':
                        if(collection.includes(item)){
                            let idxItem = collection.indexOf(item);
                            toPush = collection.splice(idxItem, 1);
                            collection.push(toPush);
                        }
                        break;
    }
    commands = arrCollection.shift();
}
console.log(collection.join(', '));

}
inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']);
inventory(['Iron, Sword', 'Drop - Bronze', 'Combine Items - Sword:Bow', 'Renew - Iron', 'Craft!']);