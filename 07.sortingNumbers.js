function sortingNumbers(arr){

let output = [];
while(arr.length > 0){
    let smallest = Math.min(...arr);
    if (smallest !== -Infinity) {
        output.push(smallest)
        let idx = arr.indexOf(smallest)
        arr.splice(idx, 1);
    }
    let biggest = Math.max(...arr);
    if (biggest !== -Infinity) {
        output.push(biggest)
        let idx = arr.indexOf(biggest)
        arr.splice(idx, 1);
    }
}
return output;

}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 6])
//sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18])