function memoryGame(game){

let elements = game.shift().split(' ');
let stopFlagman = game.shift();
let counterMoves = 1
while(stopFlagman !== 'end'){
    let idx1 = stopFlagman.split(' ').map(Number)[0];
    let idx2 = stopFlagman.split(' ').map(Number)[1];
    if(idx1 === idx2 || idx1 <0 || idx1 > elements.length - 1 || idx2 <0 || idx2 > elements.length - 1){
        elements.splice(Math.floor(elements.length/2), 0, `-${counterMoves}a`, `-${counterMoves}a`);
        console.log('Invalid input! Adding additional elements to the board');
        stopFlagman = game.shift();
        counterMoves++;
        continue;
    }
    if(elements[idx1] === elements[idx2]){
        let currElement = elements[idx1]
        if(idx1 > idx2){
            elements.splice(idx1, 1);
            elements.splice(idx2, 1);
        }else{
            elements.splice(idx2, 1);
            elements.splice(idx1, 1);
        }
        console.log(`Congrats! You have found matching elements - ${currElement}!`);
    }else{
        console.log('Try again!');
    }
    if(elements.length === 0){
        console.log(`You have won in ${counterMoves} turns!`);
        return;
    }

    stopFlagman = game.shift();
    counterMoves++;
}
console.log(`Sorry you lose :(\n${elements.join(' ')}`);
}
memoryGame(['1 1 2 2 3 3 4 4 5 5', '1 0', '-1 0', '1 0', '1 0', '1 0', 'end']);