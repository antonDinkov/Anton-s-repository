function spiralMatrix(x, y){

let matrix = [];
for (let i = 0; i < x; i++) {
    let row = [];
    for (let j = 0; j < y; j++) {
        row.push(0);
    }
    matrix.push(row);
}

let size = x * y;
let start = 1
for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i]
    for (let j = 0; j < row.length; j++) {
        matrix[i][j] = start;
        start++;
    }
    for (let k = i + 1; k < matrix.length; k++) {
        matrix[k][row.length-1] = start;
        start++;
    }
    for (let l = row.length - 1 - 1; l >= 0; l--) {
        matrix[matrix.length-1][l] = start;
        start++
    }
    for (let m = matrix.length - 1 - 1; m > 0; m--) {
        matrix[m][0] = start;
        start++;
    }
    
}

}
spiralMatrix(5, 5)
//spiralMatrix(3, 3)