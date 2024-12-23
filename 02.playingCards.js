function playingCards(face, suit){

let faceObject = new Set(['2','3','4','5','6','7','8','9','10','J','Q','K','A']);

let suitObject = {
    'C': '\u2663',
    'D': '\u2666',
    'H': '\u2665',
    'S': '\u2660'
}

if (faceObject.has(face) && suitObject.hasOwnProperty(suit)) {
    return {
        faces: face,
        suits: suit,
        toString() {
            return this.faces + suitObject[this.suits];
        }
    };
} else {
    throw new Error('This is an error!');
}

}
let output = playingCards('1', 'C');
console.log(output.toString());
/* playingCards('10', 'H')
playingCards('1', 'C') */