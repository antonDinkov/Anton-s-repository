function emojiDetector(arr){

let str = arr.shift();

let thresholdRegex = /\d/g;
let regex = /(\:\:|\*\*)[A-Z][a-z]{2,}\1/g;

let thresholdMatch = str.match(thresholdRegex).map(Number);
let coolThreshold = thresholdMatch.reduce((a, b) => a * b, 1);
console.log(`Cool threshold: ${coolThreshold}`);

let emojis = str.match(regex);
let emojiObj = {}
if (emojis) {
    for (const emoji of emojis) {
            let toReduce = [];
            let emo = emoji.split('')
            emo.forEach(char => {
                if (char !== ':' && char !== '*') {
                    let ascii = char.charCodeAt(0);
                    toReduce.push(ascii);
                }
            });
            toReduce = toReduce.reduce((a, b) => a + b, 0);
            emo = emo.join('');
            emojiObj[emo] = toReduce;
        };
}
let keys = Object.keys(emojiObj);
console.log(`${keys.length} emojis found in the text. The cool ones are:`);
for (const key in emojiObj) {
    if (emojiObj[key] > coolThreshold) {
        console.log(key);
    }
}

}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]) 