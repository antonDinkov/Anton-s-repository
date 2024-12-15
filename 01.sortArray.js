function sortArray(arr, metod) {

arr.sort((a, b) => a - b);
if (metod === 'desc') {
    return arr.reverse();
}

return arr;

}
sortArray([14, 7, 17, 6, 8], 'asc')
sortArray([14, 7, 17, 6, 8], 'desc')