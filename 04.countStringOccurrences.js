function countStringOccurrences(str, word){

const arr = str.split(' ');
let counter = 0;
for (const iterator of arr) {
    if (iterator === word){
        counter++;
    }
}
console.log(counter);
}
countStringOccurrences('This is a word and it also is a sentence', 'is');
countStringOccurrences('softuni is great place for learning new programming languages', 'softuni');