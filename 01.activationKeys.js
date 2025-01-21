function activationKeys(arr){

let str = arr.shift();
let generate = arr.shift();
while (generate !== 'Generate') {
    let [command, token1, token2, token3] = generate.split('>>>');
    if (command === 'Contains') {
        let substring = token1;
        if (str.includes(substring)) {
            console.log(`${str} contains ${substring}`);
        } else {
            console.log('Substring not found!');
        }
    } else if (command === 'Flip') {
        let upperLower = token1;
        let startIdx = Number(token2);
        let endIdx = Number(token3);
        let front = str.slice(0, startIdx);
        let toChange = str.slice(startIdx, endIdx);
        let back = str.slice(endIdx);
        if (upperLower === 'Upper') {
            toChange = toChange.toUpperCase();
        }else if( upperLower === 'Lower'){
            toChange = toChange.toLowerCase();
        }
        str = front + toChange + back;
        console.log(str);
    } else if (command === 'Slice') {
        let startIdx = Number(token1);
        let endIdx = Number(token2);
        let front = str.slice(0, startIdx);
        let toDelete = str.slice(startIdx, endIdx);
        let back = str.slice(endIdx);
        str = front + back;
        console.log(str);
    }
    generate = arr.shift();
}
console.log(`Your activation key is: ${str}`);

}
activationKeys(["abcdefghijklmnopqrstuvwxyz", "Slice>>>2>>>6", "Flip>>>Upper>>>3>>>14", "Flip>>>Lower>>>5>>>7", "Contains>>>def", "Contains>>>deF", "Generate"])
//activationKeys(["134softsf5ftuni2020rockz42", "Slice>>>3>>>7", "Contains>>>-rock", "Contains>>>-uni-", "Contains>>>-rocks", "Flip>>>Upper>>>2>>>8", "Flip>>>Lower>>>5>>>11", "Generate"])