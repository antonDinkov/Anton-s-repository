function easterDecoration(input){

let clientsNum = Number(input[0]);
let bill = 0;
let j = 1;

for(let i = 1;i <= clientsNum;i++){
    let item = input[j];
    let counter = 0;
    let spentMoney = 0;
    while(item!=='Finish'){
        let price;
        switch(item){
            case 'basket':
                price = 1.50;break;
                case 'wreath':
                    price = 3.80;break;
                    case 'chocolate bunny':
                        price = 7;break;
        }
        counter++;
        spentMoney += price;
        j++;
        item = input[j];
    }
    j++;
    if(counter%2===0){
        spentMoney *= 0.8;
    }
    bill += spentMoney;
    if(item === 'Finish'){
        console.log(`You purchased ${counter} items for ${spentMoney.toFixed(2)} leva.`);
    }
}

console.log(`Average bill per client is: ${(bill/clientsNum).toFixed(2)} leva.`);

}
easterDecoration(["2","basket","wreath","chocolate bunny","Finish","wreath","chocolate bunny","Finish"])