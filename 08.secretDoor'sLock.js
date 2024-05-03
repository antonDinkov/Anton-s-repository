function secretDoorsLock(input){

    let firstNumUpperLimit = Number(input[0]);    //Задачата е идентична с 01.uniquePinCodes
    let secondNumUpperLimit = Number(input[1]);
    let thirthNumUpperLimit= Number(input[2]);
    
    for(let i = 2;i <= firstNumUpperLimit;i++){
        for(let j = 2;j <= secondNumUpperLimit;j++){
            let flagman = true;
            for(let a = 2; a < j;a++){
                if(j%a === 0){
                    flagman = false;
                    break;
                }
            }
            for(let k = 2;k <= thirthNumUpperLimit;k++){
                if(i%2===0 && flagman===true && k%2===0){
                    console.log(`${i} ${j} ${k}`);
                }
            }
        }
    }
    
    }
secretDoorsLock(['3','5','5'])