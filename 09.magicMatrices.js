function magicMatrices(matrix){

let sum;
for (let i = 0; i < matrix[0].length; i++) {
    let currSum = 0;
    for (let j = 0; j < matrix.length; j++) {
        let currValue = matrix[j][i];
        currSum += currValue;
    }
    if (i === 0) {
        sum = currSum;
    } else {
        if (sum !== currSum) {
            return false;
        }
    }
}
for (let i = 0; i < matrix.length; i++) {
    let currSum = 0;
    for (let j = 0; j < matrix[i].length; j++) {
        let currValue = matrix[i][j];
        currSum += currValue;
    }
    if (sum !== currSum) {
        return false;
    }
}
return true;

}
console.log(magicMatrices([[4, 5, 6], 

    [6, 5, 4], 
   
    [5, 5, 5]]))
console.log(magicMatrices([[11, 32, 45], 

    [21, 0, 1], 
   
    [21, 1, 1]]))
console.log(magicMatrices([[1, 0, 0], 

    [0, 0, 1], 
   
    [0, 1, 0]]))