function ticTacToe(matrix){

let dashBoard = [
[false, false, false],
[false, false, false],
[false, false, false]
]
let flag = 1;
let counter = 9;

for (const element of matrix) {
    let [x, y] = element.split(' ').map(Number);
    if (dashBoard[x][y]) {
        console.log("This place is already taken. Please choose another!");
        continue;
    } else {
        counter--;
        if (flag === 1) {
            dashBoard[x][y] = 'X';
        } else {
            dashBoard[x][y] = 'O';
        }
        if (flag === 1) {
            flag = 2;
        } else {
            flag = 1
        }
    }
    if (((dashBoard[0][0] === 'X' && dashBoard[0][1] === 'X' && dashBoard[0][2] === 'X') || (dashBoard[0][0] === 'O' && dashBoard[0][1] === 'O' && dashBoard[0][2] === 'O')) ||
        
    ((dashBoard[1][0] === 'X' && dashBoard[1][1] === 'X' && dashBoard[1][2] === 'X') || (dashBoard[1][0] === 'O' && dashBoard[1][1] === 'O' && dashBoard[1][2] === 'O')) ||
        
    ((dashBoard[2][0] === 'X' && dashBoard[2][1] === 'X' && dashBoard[2][2] === 'X') || (dashBoard[2][0] === 'O' && dashBoard[2][1] === 'O' && dashBoard[2][2] === 'O')) ||
        
    ((dashBoard[0][0] === 'X' && dashBoard[1][0] === 'X' && dashBoard[2][0] === 'X') || (dashBoard[0][0] === 'O' && dashBoard[1][0] === 'O' && dashBoard[2][0] === 'O')) ||
        
    ((dashBoard[0][1] === 'X' && dashBoard[1][1] === 'X' && dashBoard[2][1] === 'X') || (dashBoard[0][1] === 'O' && dashBoard[2][1] === 'O' && dashBoard[2][1] === 'O')) ||
        
    ((dashBoard[0][2] === 'X' && dashBoard[1][2] === 'X' && dashBoard[2][2] === 'X') || (dashBoard[0][2] === 'O' && dashBoard[1][2] === 'O' && dashBoard[2][2] === 'O')) ||
        
    ((dashBoard[0][0] === 'X' && dashBoard[1][1] === 'X' && dashBoard[2][2] === 'X') || (dashBoard[0][0] === 'O' && dashBoard[1][1] === 'O' && dashBoard[2][2] === 'O')) ||
        
    ((dashBoard[0][2] === 'X' && dashBoard[1][1] === 'X' && dashBoard[2][0] === 'X') || (dashBoard[0][2] === 'O' && dashBoard[1][1] === 'O' && dashBoard[2][0] === 'O'))) {
        console.log(`Player ${dashBoard[x][y]} wins!`);
        for (const element of dashBoard) {
            console.log(element.join('\t'));
        }
        return;
    }
    if (!counter) {
        console.log("The game ended! Nobody wins :(");
        for (const element of dashBoard) {
            console.log(element.join('\t'));
        }
        return;
    }
}

}
ticTacToe(["0 1", 

    "0 0", 
   
    "0 2",  
   
    "2 0", 
   
    "1 0", 
   
    "1 1", 
   
    "1 2", 
   
    "2 2", 
   
    "2 1", 
   
    "0 0"])
ticTacToe(["0 0", 

    "0 0", 
   
    "1 1", 
   
    "0 1", 
   
    "1 2", 
   
    "0 2", 
   
    "2 2", 
   
    "1 2", 
   
    "2 2", 
   
    "2 1"])
ticTacToe(["0 1", 

    "0 0", 
   
    "0 2", 
   
    "2 0", 
   
    "1 0", 
   
    "1 2", 
   
    "1 1", 
   
    "2 1", 
   
    "2 2", 
   
    "0 0"])