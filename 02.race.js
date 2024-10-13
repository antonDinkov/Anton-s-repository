function race(arr){

let participants = arr.shift().split(/, /);
let participantsObj = {};
for (const iterator of participants) {
    participantsObj[iterator] = 0;
}

let namePattern = /[A-Z]/gi;
let distancePattern = /\d/g;
for (const iterator of arr) {
    if(iterator === 'end of race'){
        break;
    }
    let name = iterator.match(namePattern).join('');
    if (name in participantsObj){
        let distance = iterator.match(distancePattern).map(Number).reduce((acumulator, currValue) => acumulator + currValue, 0);
        participantsObj[name] += distance;
    }
}

let participantsArr = Object.entries(participantsObj).sort(([a, b], [a1, b1]) => b1 - b);
console.log(`1st place: ${participantsArr[0][0]}`);
console.log(`2nd place: ${participantsArr[1][0]}`);
console.log(`3rd place: ${participantsArr[2][0]}`);

}
race(['George, Peter, Bill, Tom', 'G4e@55or%6g6!68e!!@ ', 'R1@!3a$y4456@', 'B5@i@#123ll', 'G@e54o$r6ge#', '7P%et^#e5346r', 'T$o553m&6', 'end of race'])
//race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne', 'Mi*&^%$ch123o!#$%#nne787) ', '%$$B(*&&)i89ll)*&) ', 'R**(on%^&ald992) ', 'T(*^^%immy77) ', 'Ma10**$#g0g0g0i0e', 'end of race'])