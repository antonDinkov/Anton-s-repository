function diagonalAttack(arr){
let matrix = [];
for (const element of arr) {
    let toPush = element.split(' ').map(Number);
    matrix.push(toPush);
}
let sumLeft = 0;
let sumRight = 0;
let l = 0;
let r = matrix[0].length - 1;
for (let i = 0; i < matrix.length; i++) {
    let currNumLeft = matrix[i][l]
    l++;
    sumLeft += currNumLeft;
    let currNumRight = matrix[i][r]
    r--;
    sumRight += currNumRight;
}
let jumpLeft = 0;
let jumpRight = matrix[0].length - 1;
if (sumLeft === sumRight) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (j === jumpLeft) {
                continue;
            } else if (j === jumpRight){
                continue;
            } matrix[i][j] = sumLeft;
        }
        jumpLeft++;
        jumpRight--;
    }
}
matrix.forEach(element => {
    console.log(element.join(' '));
});

}
diagonalAttack(['5 3 12 3 1', 

    '11 4 23 2 5', 
    
    '101 12 3 21 10', 
    
    '1 4 5 2 2', 
    
    '5 22 33 11 1'])
diagonalAttack(['1 1 1', 

    '1 1 1', 
    
    '1 1 0'])