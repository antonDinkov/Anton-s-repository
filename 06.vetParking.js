function vetParking(input){

let daysNum = Number(input[0]);
let hoursDaily = Number(input[1]);
let priceTotal = 0;

for(let i = 1;i<=daysNum;i++){
    let price = 0;
    if(i%2!==0){
        for(let j = 1;j<=hoursDaily;j++){
            if(j%2!==0){
                price += 1;
            }else{
                price += 1.25;
            }
        }
    }else{
        for(let j = 1; j<=hoursDaily;j++){
            if(j%2!==0){
                price += 2.50;
            }else{
                price += 1.00;
            }
        }
    }
    console.log(`Day: ${i} – ${price.toFixed(2)} leva`)
    priceTotal += price;
}

console.log(`Total: ${priceTotal.toFixed(2)} leva`);

}
vetParking(['2','5','5','2'])