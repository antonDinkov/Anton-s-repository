function wordsUppercase(str){

let regex = /[A-Za-z0-9]+/g;
let matches = regex.exec(str);
let output = [];
while (matches) {
    toPush = matches[0].toUpperCase();
    output.push(toPush);
    matches = regex.exec(str)
}
console.log(output.join(', '));

}
wordsUppercase('Hi, how are you?')
wordsUppercase('hello')