function uniquePINCodes(input){

let firstNumUpperLimit = Number(input[0]);  //Числото трябва да е четно
let secondNumUpperLimit = Number(input[1]); //Числото трябва да е просто
let thirthNumUpperLimit= Number(input[2]);  //Числото трябва да е четно

for(let i = 2;i <= firstNumUpperLimit;i++){
    for(let j = 2;j <= secondNumUpperLimit;j++){
        let flagman = true;
        for(let a = 2; a < j;a++){          //Създавам делител 'a'
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
uniquePINCodes(['3','9','5'])