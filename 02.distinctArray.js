function distinctArray(arr){

let nonRepeating = [...new Set(arr)];
console.log(nonRepeating.join(' '));

}
distinctArray([1,2,3,4,4,3]);