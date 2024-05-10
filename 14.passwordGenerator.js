function passwordGenerator(input){

let n = Number(input[0]);
let L = Number(input[1]);
let exitPrint = '';

for(let i = 1;i <= n;i++){
    for(let j = 1;j <= n;j++){
        for(let k = 'a'.charCodeAt(0);k < 'a'.charCodeAt(0)+L;k++){
            for(let l = 'a'.charCodeAt(0);l < 'a'.charCodeAt(0)+L;l++){
                for(let m = 2;m <= n;m++){
                    if(m>i && m>j){
                        exitPrint += `${i}${j}${String.fromCharCode(k)}${String.fromCharCode(l)}${m} `;
                    }
                }
            }
        }
    }
}

console.log(exitPrint);

}
passwordGenerator(['4','2'])