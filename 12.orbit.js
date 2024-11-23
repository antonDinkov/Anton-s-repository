function orbit(arr){

let matrix = [];
for (let i = 0; i < arr[0]; i++) {
    let toPush = [];
    for (let j = 0; j < arr[1]; j++) {
        toPush.push(0);
    }
    matrix.push(toPush);
}

let x = arr[2];
let y = arr[3];
matrix[x][y] = 1;

let coordinate = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],         [0, 1],
    [1, -1], [1, 0], [1, 1]
]
console.table(matrix);
let next = 2;
let leftX = arr[0] - 1 - x;
let leftY = arr[1] - 1 - y;
let additional = 1
while (leftX && leftY) {
    for (const element of coordinate) {
        let [i, j] = element;
        if (x+i*additional >= 0 && y+j*additional >= 0 && x < matrix.length && y < matrix[0].length) {
            matrix[x+i*additional][y+j*additional] = next;
        }
    }
    if (next > 2) {
        for (let i = 0; i < matrix.length; i++) {
            let element = matrix[i];
            let a = element.indexOf(next);
            let b = element.lastIndexOf(next);
            /* for (let j = 0; j < element.length; j++) {
                let zero = element[j];
                if (zero === 0) {
                    matrix[i][j] = next;
                }
            } */
            
            if (a !== b && !element.includes(1)) {
                matrix[i].fill(next, a, b);
            }
        }
    }
    console.table(matrix)
    additional++;
    next++;
    leftX--;
    leftY--;
}

console.table(matrix);
let top = 0;
let rigth = y-1;
let bottom = x-1;
let left = 0;


}
//orbit([4, 4, 0, 0])
//orbit([5, 5, 2, 2])
orbit([3, 3, 2, 2])