function mirrorWords(arr){

let regex = /(@|#)[A-Za-z]{3,}\1\1[A-Za-z]{3,}\1/g;
let finalRegex = /\w+/g;
let firstMatch = arr.shift().match(regex);
if (!firstMatch) {
    console.log('No word pairs found!\nNo mirror words!');
    return;
}
let secondMatch = firstMatch.join(', ').match(finalRegex);
let counter = secondMatch.length / 2;
console.log(`${counter} word pairs found!`);
let output = [];
for (let index = 0; index < secondMatch.length; index += 2) {
    let first = secondMatch[index];
    let second = secondMatch[index+1].split('').reverse().join('');
    if (first === second) {
        second = second.split('').reverse().join('');
        output.push(`${first} <=> ${second}`);
    }
}
if (output.length === 0) {
    console.log('No mirror words!');
}else{
    console.log(`The mirror words are:\n${output.join(', ')}`);
}

}
mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])