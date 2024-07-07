function arrayManipulations(array){

let newArr = array.shift();
newArr = newArr.split(' ');
newArr = newArr.map(Number);

for(curr of array){
    let currToArr = curr.split(' ');
    let command = currToArr[0];
    let cipher = Number(currToArr[1]);
    let indx = Number(currToArr[2]);
    switch (command) {
        case 'Add': newArr.push(cipher);break;
            case 'Remove':newArr = newArr.filter(x => x !== cipher);break;
                case 'RemoveAt': newArr.splice(cipher, 1);break;
                    case 'Insert':newArr.splice(indx, 0, cipher);break;
    }
}
console.log(newArr.join(' '));

}
arrayManipulations(['4 19 2 53 6 43','Add 3','Remove 2','RemoveAt 1','Insert 8 3'])