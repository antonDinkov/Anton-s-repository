function reportSystem(input){

let limit = Number(input[0]);
let payCash = 0;
let payCard = 0;
let totalAmmount = payCash + payCard;
let payCashCounter = 0;
let payCardCounter = 0;

let i = 1
let price;
let command = input[i];

while(i < input.length){
    if(command!=='End'){
    price = Number(input[i]);
    if(price>=10&&price<=100&&i%2!==0){
        payCash += price;
        payCashCounter++
        console.log('Product sold!');
        }else if(price>=10&&price<=100&&i%2===0){
        payCard += price;
        payCardCounter++
        console.log('Product sold!');
        }else if(price>100&&i%2!==0){   //плащане в брой при цена над 100 лв не е възможно
            console.log('Error in transaction!');
        }else if(price>100&&i%2===0){
            payCard += price;
            payCardCounter++
            console.log('Product sold!');
        }else if(price<10&&i%2!==0){
            payCash += price;
            payCashCounter++
            console.log('Product sold!');
        }else if(price<10&&i%2===0){
            console.log('Error in transaction!');  //плащане с карта при цена под 10 лв не е възможно
        }
        totalAmmount = payCash + payCard;
        if(totalAmmount>=limit){
            let averageCash = payCash/payCashCounter;
            let averageCard = payCard/payCardCounter;
            console.log(`Average CS: ${averageCash.toFixed(2)}`);
            console.log(`Average CC: ${averageCard.toFixed(2)}`);break;
        }
        i++;
        command = input[i];
    }else if(command==='End'){
        console.log('Failed to collect required money for charity.');break;
    }
    
}

}
reportSystem(['500','120','8','63','256','78','317'])