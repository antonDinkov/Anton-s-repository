function cardGame(arr){

    const power = {
        2: 2, 3: 3, 4: 4, 5: 5, 6: 6,
        7: 7, 8: 8, 9: 9, 10: 10,
        'J': 11, 'Q': 12, 'K': 13, 'A': 14
    }
    const type = {
        'S': 4, 'H': 3, 'D': 2, 'C': 1
    }
    let players = {};
    for (const iterator of arr) {
        let [name, cards] = iterator.split(': ')
        cards = cards.split(', ');
        if(!players[name]){
            players[name] = new Set(cards);
            continue;
        }
        for (const iterator of cards) {
            players[name].add(iterator);
        }
    }
    let outputResult = {};
    for (const iterator in players) {
        let result = 0
        let playerCards = players[iterator]
        for (const card of playerCards) {
            let cardArr = card.split('');
            const t = cardArr.pop();
            const p = cardArr.join('');
            const product = power[p] * type[t];
            result += product;
        }
        outputResult[iterator] = result;
    }
    for (const key in outputResult) {
        console.log(`${key}: ${outputResult[key]}`);
    }
    
    }
    cardGame([ 'Peter: 2C, 4H, 9H, AS, QS',
        'Tomas: 3H, 10S, JC, KD, 5S, 10S',
        'Andrea: QH, QC, QS, QD',
        'Tomas: 6H, 7S, KC, KD, 5S, 10C',
        'Andrea: QH, QC, JS, JD, JC',
        'Peter: JD, JD, JD, JD, JD, JD']);
    /* cardGame(['John: 2C, 4H, 9H, AS, QS',
        'Slav: 3H, 10S, JC, KD, 5S, 10S',
        'Alex: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'Slav: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'Alex: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'John: JD, JD, JD, JD']); */