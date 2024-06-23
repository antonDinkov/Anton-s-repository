function mergeArrays(arr1, arr2){

let arr3 = [];
for(let i in arr1){
    if(i%2 == 0){
        arr3[i] = Number(arr1[i]) + Number(arr2[i]);
    }else{
        arr3[i] = arr1[i] + arr2[i];
    }
}
let printView = '';
let counter = 0;
for(let j of arr3){
    if(counter == arr3.length - 1){
        printView += j;
    }else{
        printView += j + ' - ';
    }
    counter++;
}
console.log(printView);

}
mergeArrays
(['5','15','23','56','35'],
['17','22','87','36','11']);