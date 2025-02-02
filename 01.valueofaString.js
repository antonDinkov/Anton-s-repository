function valueofaString(arr){

let str = arr.shift();
let command = arr.shift();
let sum = 0;
for (let i = 0; i < str.length; i++) {
    if (command === 'LOWERCASE') {
        if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
            sum += str.charCodeAt(i)
        }
    } else {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            sum += str.charCodeAt(i)
        }
    }
}
console.log(`The total sum is: ${sum}`);

}
valueofaString(['HelloFromMyAwesomePROGRAM', 

    'LOWERCASE'])
valueofaString(['AC/DC', 

    'UPPERCASE'])