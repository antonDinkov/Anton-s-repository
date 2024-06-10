function magicMatrices(arr2d){

let rows = arr2d.length;
let columns = rows;


let isSumRowEqualsSumColumn = true;
let sumRow = 0;
let sumColumn = 0;
for(let i = 0; i < rows; i++){
    let currSumRow = 0
    for(let j = 0; j < columns; j++){
        currSumRow += arr2d[i][j];
    }
    if(i === 0){
        sumRow = currSumRow;
    }
    if(currSumRow !== sumRow){
        isSumRowEqualsSumColumn = false;
        console.log(isSumRowEqualsSumColumn);
        return;
    }
}
for(let j = 0; j < rows; j++){
    let currSumColumn = 0
    for(let i = 0; i < columns; i++){
        currSumColumn += arr2d[i][j];
    }
    if(j === 0){
        sumColumn = currSumColumn;
    }
    if(currSumColumn !== sumColumn){
        isSumRowEqualsSumColumn = false;
        console.log(isSumRowEqualsSumColumn);
        return;
    }
}
if(sumRow !== sumColumn){4
    console.log(!isSumRowEqualsSumColumn);
    return;
}

console.log(isSumRowEqualsSumColumn);

}
magicMatrices([
    [4,5,6],
    [6,5,4],
    [5,5,5]
])