function weddingSeats(input){

let lastSector = input[0].charCodeAt(0);
let rowNumsSectorA = Number(input[1]);
let firstSector = 'A'.charCodeAt(0);
let counter = 0;

for(let i = firstSector;i <= lastSector;i++){
    for(let j = 1;j <= rowNumsSectorA;j++){
        let firstSeat = 'a'.charCodeAt(0);
        let seatsNumRow;
        if(j%2!==0){
            seatsNumRow = Number(input[2]);
        }else{
            seatsNumRow = Number(input[2]) + 2;
        }
        for(let k = firstSeat;k < (firstSeat + seatsNumRow);k++){
            console.log(`${String.fromCharCode(i)}${j}${String.fromCharCode(k)}`);
            counter++;
        }
    }
    rowNumsSectorA++;
}

console.log(counter);

}
weddingSeats(['B','3','2'])