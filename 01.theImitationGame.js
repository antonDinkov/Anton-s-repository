function theImitationGame(arr){

let script = arr.shift();
let decode = arr.shift();
while (decode !== 'Decode') {
    let [command, parameter1, parameter2] = decode.split('|');
    switch (command) {
        case 'Move':
            let nLetters = Number(parameter1);
            let sliced = script.slice(0, nLetters);
            script = script.slice(nLetters) + sliced;
            break;
            case 'Insert':
                let index = Number(parameter1);
                script = script.split('');
                script.splice(index, 0, parameter2);
                script = script.join('');
                break;
                case 'ChangeAll':
                    for (const iterator of script) {
                        let idx = script.indexOf(iterator);
                        if (iterator === parameter1) {
                            script = script.replace(parameter1, parameter2);
                        }
                    }
                    break;
    }

    decode = arr.shift();
}
console.log(`The decrypted message is: ${script}`);

}
theImitationGame(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode'])
theImitationGame(['owyouh', 'Move|2', 'Move|3', 'Insert|3|are', 'Insert|9|?', 'Decode'])