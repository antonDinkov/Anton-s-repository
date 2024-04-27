function carNumber(input){

let startInterval = Number(input[0]);
let endInterval = Number(input[1]);
let specialNums = '';

for(let i = startInterval;i <= endInterval;i++){
    for(let j = startInterval;j <= endInterval;j++){
        for(let k = startInterval;k <= endInterval;k++){
            for(let l = startInterval;l <= endInterval;l++){
                if(((i%2===0)&&(l%2!==0)||(i%2!==0)&&(l%2===0)) && i > l && (j+k)%2===0){
                    specialNums += String(i) + String(j) + String(k) + String(l) + ' ';
                }
            }
        }
    }
}

console.log(specialNums);

}
carNumber(['3','5'])