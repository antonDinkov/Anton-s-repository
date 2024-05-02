function safePasswordsGenerator(input){

let a = Number(input[0]);
let b = Number(input[1]);
let limit = Number(input[2]);
let counter = 0;
let finalPrint = '';
let i = 35;
let j = 64

mainLoop:for( let k = 1;k <= a;k++){
    for(let l = 1;l <= b;l++){
        finalPrint += String.fromCharCode(i) + String.fromCharCode(j) + String(k) + String(l) + String.fromCharCode(j) + String.fromCharCode(i) + '|';
        counter++;
        i++;j++;
        if(counter === limit){
        break mainLoop;
        }
        if(i > 55){
            i = 35;
        }
        if(j > 96){
            j = 64;
        }
    }
}     

console.log(finalPrint);

}
safePasswordsGenerator(['2','3','10'])