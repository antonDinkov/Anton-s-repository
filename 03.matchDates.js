function matchDates(arr){

arr = arr.shift();
let regex = /\b(?<Day>\d{2})([\.\-\/])(?<Month>[A-Z][a-z]{2})\2(?<Year>\d{4})\b/g;
//Ако извадя предварително шаблона и после използваме само output в цикъла, няма да итерира през съвпаденията - безкраен цикъл!!!

let output = arr.matchAll(regex);
for (const iterator of output) {
    let keyArr = Object.keys(iterator.groups);
    console.log(`${keyArr[0]}: ${iterator.groups[keyArr[0]]}, ${keyArr[1]}: ${iterator.groups[keyArr[1]]}, ${keyArr[2]}: ${iterator.groups[keyArr[2]]}`);
}

/* while((output = regex.exec(arr)) !== null){
    let keyArr = Object.keys(output.groups);
    console.log(`${keyArr[0]}: ${output.groups[keyArr[0]]}, ${keyArr[1]}: ${output.groups[keyArr[1]]}, ${keyArr[2]}: ${output.groups[keyArr[2]]}`);
} */

}
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])
//matchDates(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014'])