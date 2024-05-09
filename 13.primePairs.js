function primePairs(input){

let startValue1 = Number(input[0]);
let startValue2 = Number(input[1]);
let difference1 = Number(input[2]);
let difference2 = Number(input[3]);
let exitPrint = ''

for(let i = startValue1;i <= (startValue1+difference1);i++){
    let flagman1 = true;
    for(let k = 2;k < i;k++){
        if(i%k === 0){
            flagman1 = false;
            break;
        }
    }
    for(let j = startValue2;j <= (startValue2+difference2);j++){
        let flagman2 = true;
        for(let l = 2;l < j;l++){
            if(j%l === 0){
                flagman2 = false;
                break;
            }
        }
        if(flagman1 && flagman2){
            exitPrint = `${i}${j}`;
            console.log(exitPrint);
        }
    }
}

}
primePairs(['10','20','5','5'])