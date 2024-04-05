function equipment(input){

let tax = Number(input[0]);
let sneakers = (1 - 40/100) * tax;
let equip = (1 - 20/100) * sneakers;
let ball = (1/4) * equip;
let accessories = (1/5) * ball

let jessyExpenditures = tax + sneakers + equip + ball + accessories;

console.log(jessyExpenditures);

}

equipment(["365"])