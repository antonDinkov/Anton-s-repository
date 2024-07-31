function cookingMasterclass(arr){

arr = arr.map(Number);
let georgeIsBudget = arr.shift();
let studentsNum = arr.shift();

let flourPrice = arr.shift();
let permanentFlourPrice = flourPrice;
let finalFlourPrice = 0;
for(let i = 1; i <= studentsNum; i++){
    if(i % 5 === 0){
        flourPrice = 0;
    }else {
        flourPrice = permanentFlourPrice
    }
    finalFlourPrice += flourPrice;
}

let tenEggsPrice = arr.shift()*10*studentsNum;
let apronPrice = arr.shift() * Math.ceil(studentsNum * 1.2);
let totalPrice = finalFlourPrice + tenEggsPrice + apronPrice;
if(totalPrice <= georgeIsBudget){
    console.log(`Items purchased for ${totalPrice.toFixed(2)}$.`);
}else{
    console.log(`${(totalPrice - georgeIsBudget).toFixed(2)}$ more needed.`);
}

}
cookingMasterclass(['50', '2', '1.0', '0.10', '10.0']);
cookingMasterclass(['100', '25', '4.0', '1.0', '6.0']);
cookingMasterclass(['946', '20', '12.05', '0.42', '27.89']);