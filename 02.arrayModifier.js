function arrayModifier(arr){

let toManipulate = arr.shift().split(' ').map(Number);
let theCommand = arr.shift();
while(theCommand !== 'end'){
    let commands = theCommand.split(' ');
    let toDo = commands.shift();
    switch(toDo){
        case 'swap':
            let idx1 = Number(commands[0]);
            let idx2 = Number(commands[1]);
            let temporary = toManipulate[idx1];
            toManipulate[idx1] = toManipulate[idx2];
            toManipulate[idx2] = temporary;
            break;
            case 'multiply':
                let idxx1 = Number(commands[0]);
                let idxx2 = Number(commands[1]);
                let product = toManipulate[idxx1] * toManipulate[idxx2];
                toManipulate.splice(idxx1, 1, product);
                break;
                case 'decrease':
                    toManipulate = toManipulate.map(n => n-1);
                    break;
    }
    theCommand = arr.shift();
}
console.log(toManipulate.join(', '));


}
arrayModifier(['23 -2 321 87 42 90 -123', 'swap 1 3', 'swap 3 6', 'swap 1 0', 'multiply 1 2', 'multiply 2 1', 'decrease', 'end']);
//arrayModifier(['1 2 3 4', 'swap 0 1', 'swap 1 2', 'swap 2 3', 'multiply 1 2', 'decrease', 'end']);