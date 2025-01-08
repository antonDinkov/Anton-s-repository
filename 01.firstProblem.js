function firstProblem(arr){

let msg = arr.shift();
let finalize = arr.shift();
while (finalize !== 'Finalize') {
    let [command, token1, token2] = finalize.split(' ');
    if (command === 'Encrypt') {
        msg = msg.split('').reverse().join('');
        console.log(msg);
    } else if (command === 'Decrypt') {
        msg = msg.split('').map((char) => {
            if (char === char.toUpperCase()) {
                return char = char.toLowerCase();
            } else {
                return char = char.toUpperCase();
            }
        });
        msg = msg.join('');
        console.log(msg);
    } else if (command === 'Substitute') {
        let old_char = token1;
        let new_char = token2;
        if (!msg.includes(old_char)) {
            console.log('Character not found.');
        } else {
            msg = msg.split(old_char).join(new_char)
            console.log(msg);
        }
    } else if (command === 'Scramble') {
        let idx = Number(token1);
        let char = token2;
        if (idx >= 0 && idx < msg.length) {
            msg = msg.split('');
            msg.splice(idx, 1, char);
            msg = msg.join('');
            console.log(msg);
        } else {
            console.log('Index out of bounds.');
        }
    } else if (command === 'Remove') {
        let substring = token1;
        msg = msg.split(substring).join('');
        console.log(msg);
        
    } else {
        console.log('Invalid command detected!');
    }
    finalize = arr.shift();
}

}
firstProblem(["helloWorld", "Encrypt", "Decrypt", "Substitute L z", "Remove O", "Scramble 0 H", "Invalid command detected!", "Finalize"])
firstProblem(["GalacticMission", "Decrypt", "Scramble 5 Z", "Remove S", "Substitute G X", "Encrypt", "Finalize"])
firstProblem(["Federation1", "Encrypt", "Decrypt", "Remove 1", "Substitute E e", "Scramble 2 X", "Encrypt", "Finalize"])