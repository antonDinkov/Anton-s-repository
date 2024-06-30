function firstAndLastKNumbers(arr){

const k = arr.shift();
const firstK = arr.slice(0,k);
const lastK = arr.slice(-k);
console.log(firstK.join(' '));
console.log(lastK.join(' '));

}
firstAndLastKNumbers([2,7,8,9]);