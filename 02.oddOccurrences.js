function oddOccurrences(string){

const arr = string.toLowerCase().split(' ');
const elementsCounter = new Map();
for (const iterator of arr) {
    if(elementsCounter.has(iterator)){
        let currValue = elementsCounter.get(iterator) + 1;
        elementsCounter.set(iterator, currValue);
    }else{
        elementsCounter.set(iterator, 1);
    }
}
let output = '';

for (const [key, value] of elementsCounter) {
    if(value % 2 !== 0){
        output += key + ' ';
    }
}
console.log(output);

}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
//oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');