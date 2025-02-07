function asciiSumator(arr){

let firstChar = arr.shift();
let firstCode = firstChar.charCodeAt(0);

let secondChar = arr.shift();
let secondCode = secondChar.charCodeAt(0);

let biggerOneArr = [];
if (firstCode > secondCode) {
    biggerOneArr[0] = firstCode;
    biggerOneArr[1] = secondCode;
} else {
    biggerOneArr[0] = secondCode;
    biggerOneArr[1] = firstCode;
}

let str = arr.shift();
let sum = 0;
for (const char of str) {
    if (char.charCodeAt(0) > biggerOneArr[1] && char.charCodeAt(0) < biggerOneArr[0]) {
        let currCode = char.charCodeAt(0);
        sum += currCode
    }
}
console.log(sum);

}
asciiSumator(['.', 

    '@', 
    
    'dsg12gr5653feee5'])
asciiSumator(['?', 

    'E', 
    
    '@ABCEF'])
asciiSumator(['a', 

    '1', 
    
    'jfe392$#@j24ui9ne#@$'])