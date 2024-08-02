function secretChat(arr){

let msg = arr.shift();
let reveal = arr.shift();
while (reveal !== 'Reveal') {
    let [command, token1, token2] = reveal.split(':|:');

    if (command === 'InsertSpace') {
        let idx = Number(token1);
        let firstHalf = msg.slice(0, idx);
        let secondHalf = msg.slice(idx);
        msg = firstHalf + ' ' + secondHalf;
        console.log(msg);
        
    } else if (command === 'Reverse') {
        if (msg.includes(token1)) {
            msg = msg.replace(token1, '')
            token1 = token1.split('').reverse().join('');
            msg = msg + token1;
            console.log(msg);
        } else {
            console.log('error');
        }
    }else if (command === 'ChangeAll') {
        while (msg.includes(token1)) {
            msg = msg.replace(token1, token2);
        }
        console.log(msg);
    }
    reveal = arr.shift();
}
console.log(`You have a new text message: ${msg}`);

}
secretChat(['heVVodar!gniV', 'ChangeAll:|:V:|:l', 'Reverse:|:!gnil', 'InsertSpace:|:5', 'Reveal'])
//secretChat(['Hiware?uiy', 'ChangeAll:|:i:|:o', 'Reverse:|:?uoy', 'Reverse:|:jd', 'InsertSpace:|:3', 'InsertSpace:|:7', 'Reveal'])