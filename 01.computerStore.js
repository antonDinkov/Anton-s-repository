function computerStore(arr){

let price = 0;
let print = arr.shift();
while(print !== 'special' && print !== 'regular'){
    currPrice = Number(print);
    if(currPrice <= 0){
        console.log('Invalid price!');
        print = arr.shift();
        continue;
    }
    price += currPrice;
    
    print = arr.shift();
}
if(price === 0){
    console.log('Invalid order!');
    return;
}
let taxes = price * 0.20;
let totalPrice = price + taxes;
if(print === 'special'){
    totalPrice *= 0.90;
}

console.log("Congratulations you've just bought a new computer!");
console.log(`Price without taxes: ${price.toFixed(2)}$`);
console.log(`Taxes: ${taxes.toFixed(2)}$`);
console.log('-----------');
console.log(`Total price: ${totalPrice.toFixed(2)}$`);

}
computerStore(['1050','200','450','2','18.50','16.86','special']);