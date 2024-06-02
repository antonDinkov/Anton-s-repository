function printNthElement(arr){

let step = Number(arr[arr.length - 1]);
let output = [];
for(let i = 0;i < arr.length - 1;i += step){
    output.push(arr[i]);
}
console.log(output.join(' '));

}
printNthElement(['5','20','31','4','20','2']);