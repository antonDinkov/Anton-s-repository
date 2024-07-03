function processOddNumbers(arr){

let output = [];
for( indx in arr) {
    let currEl = arr[indx];
    if(indx % 2 !== 0) {
        currEl *= 2;
        output.unshift(currEl);
    }
}
console.log(output.join(' '));

}
processOddNumbers([10, 15, 20, 25]);