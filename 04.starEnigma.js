function starEnigma(arr){

let n = arr.shift();
const lettersRegex = /[star]/gi;
const finalRegex = /@(?<planet>[A-Z][a-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*\!(?<attackType>A|D)\![^@\-!:>]*->(?<soldiers>\d+)/;
let attacked = [];
let destroyed = [];
for (const iterator of arr) {
    //включвам и || ситуация при която няма съвпадение, защото иначе ще ми върне грешка!
    let count = (iterator.match(lettersRegex) || []).length;
    let newArr = [];
    for (let i = 0; i < iterator.length; i++){
        let newAscii = iterator.charCodeAt(i) - count;
        let newChar = String.fromCharCode(newAscii);
        newArr.push(newChar);
    }
    let newString = newArr.join('');
    let matches = newString.match(finalRegex);
    if (matches) {
        if (matches.groups.attackType === 'A'){
            attacked.push(matches.groups.planet);
        }else{
            destroyed.push(matches.groups.planet);
        }
    }
}
attacked.sort((a, b) => a.localeCompare(b));
destroyed.sort((a,b) => a.localeCompare(b));
console.log(`Attacked planets: ${attacked.length}`);
if (attacked.length > 0) {
    attacked.forEach(element => console.log(`-> ${element}`));
}
console.log(`Destroyed planets: ${destroyed.length}`);
if (destroyed.length > 0) {
    destroyed.forEach(element => console.log(`-> ${element}`));
}

}
starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR'])
starEnigma(['3', "tt(''DGsvywgerx>6444444444%H%1B9444", 'GQhrr|A977777(H(TTTT', 'EHfsytsnhf?8555&I&2C9555SR'])