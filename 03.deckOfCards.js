function deckOfCards(arr){

    let faceObject = new Set(['2','3','4','5','6','7','8','9','10','J','Q','K','A']);

    let suitObject = {
        'C': '\u2663',
        'D': '\u2666',
        'H': '\u2665',
        'S': '\u2660'
    }

    const output = [];
    for (const element of arr) {
        let [face, suit, extra] = element.split('');
        if (extra) {
            face = face+suit;
            suit =extra
        }
        if (faceObject.has(face) && suitObject.hasOwnProperty(suit)) {
            let toPush = face + suitObject[suit];
            output.push(toPush)
        } else {
            console.log(`Invalid card: ${element}`);
            return;
        }
    }
    console.log(output.join(' '));

}
deckOfCards(['AS', '10D', 'KH', '2C'])
deckOfCards(['5S', '3D', 'QD', '1C'])
