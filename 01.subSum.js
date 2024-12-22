function subSum(arr, start, end){

if (!Array.isArray(arr)) {
    return NaN;
}
if (start<0) {
    start = 0;
}
if (end >= arr.length) {
    end = arr.length -1;
}

let sum = 0;
for (let index = start; index <= end; index++) {
    const element = Number(arr[index]);
    sum += element;
}
return sum;

}
subSum([10, 20, 30, 40, 50, 60], 3, 300)
subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)
subSum([10, 'twenty', 30, 40], 0, 2)
subSum([], 1, 2)
subSum('text', 0, 2)