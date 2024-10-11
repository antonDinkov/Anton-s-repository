function lettersChangeNumbers(str){

let arr = str.split(' ').filter(el => el !== '');
let sum = 0;
for (const iterator of arr) {
    let iteratorArr = iterator.split('');

    let front = iteratorArr.shift();
    let frontLetterPosition = getLetterPosition(front);

    let back = iteratorArr.pop();
    let backLetterPosition = getLetterPosition(back);

    let number = Number(iteratorArr.join(''));

    if(front === front.toUpperCase()){
        number /= frontLetterPosition;
    }else{
        number *= frontLetterPosition;
    }

    if(back === back.toUpperCase()){
        number -= backLetterPosition;
    }else{
        number += backLetterPosition;
    }
    
    sum += number;
}
console.log(sum.toFixed(2));

function getLetterPosition(letter){
    if(letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90){
        let position = letter.charCodeAt(0) - 64;
        return position;
    }else if(letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122){
        let position = letter.charCodeAt(0) - 96;
        return position;
    }
}
}
//lettersChangeNumbers('A12b s17G')
lettersChangeNumbers('P34562Z q2576f   H456z')
//lettersChangeNumbers('a1A')