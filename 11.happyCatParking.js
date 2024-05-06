function happyCatParking(input){

let daysNum = Number(input[0]);
let hoursDaily = Number(input[1]);
let total = 0;

for(let i = 1;i <= daysNum;i++){
    let currentPrice = 0;
    for(let j = 1;j <= hoursDaily;j++){
        if(i%2===0 && j%2!==0){
           currentPrice += 2.50;
        }else if(i%2!==0 && j%2===0){
            currentPrice += 1.25;
        }else{
            currentPrice +=1.00;
        }
    }
    console.log(`Day: ${i} - ${currentPrice.toFixed(2)} leva`);
    total += currentPrice;
}

console.log(`Total: ${total.toFixed(2)} leva`);

}
happyCatParking(['2','5'])