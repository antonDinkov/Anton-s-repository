function passwordReset(arr){

let str = arr.shift();

let stop = arr.shift();
while(stop !== 'Done'){
    let [command, token1, token2] = stop.split(' ');
    if (command === 'TakeOdd') {
        let newPass = [];
        for (let index = 1; index < str.length; index += 2) {
            newPass.push(str[index]);
        }
        str = newPass.join('');
        console.log(str);
    }else if(command === 'Cut'){
        let index = Number(token1);
        let length = Number(token2);
        str = str.split('');
        str.splice(index, length);
        str = str.join('');
        console.log(str);
    }else if(command === 'Substitute'){
        if (str.includes(token1)) {
            while(str.includes(token1)){
                str = str.replace(token1, token2);
            }
            console.log(str);
        } else {
            console.log('Nothing to replace!');
        }
    }
    stop = arr.shift();
}
console.log(`Your password is: ${str}`);

}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", "TakeOdd", "Cut 15 3", "Substitute :: -", "Substitute | ^", "Done"])
//passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy", "TakeOdd", "Cut 18 2", "Substitute ! ***", "Substitute ? .!.", "Done"])
