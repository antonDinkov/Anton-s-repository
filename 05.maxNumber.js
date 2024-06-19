function maxNumber(input){

let printOut = '';
for(let i = 0;i < input.length;i++){
    let topNum = input[i];
    let flagman = true;
    for(let j = i+1; j < input.length;j++){
        if(topNum <= input[j]){
            flagman = false;
            break;
        }
    }
    if(flagman){
        printOut += topNum + ' ';
    }
}
console.log(printOut);

}
maxNumber([41,41,34,20])