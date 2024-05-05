function profit(input){

let oneLevNums = Number(input[0]);
let twoLevNums = Number(input[1]);
let fiveLevNums = Number(input[2]);
let magicSum = Number(input[3]);

for(let i = 0;i <= oneLevNums;i++){
    for(let j = 0;j <= twoLevNums;j++){
        for(let k = 1;k <= fiveLevNums;k++){
            if(i*1+j*2+k*5 === magicSum){
                console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${magicSum} lv.`);
            }
        }
    }
}

}
profit(['3','2','3','5'])