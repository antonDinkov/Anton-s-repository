function maxSequenceEqualElements(input){
    let limit = input.length;
    let counter = 1;
    let suprimeCounter = 1;
    let suprimeNumber;
    for(let i = 0;i < limit;i++){
        let currNum = input[i];
        let nextNum = input[i+1];
        if(nextNum == currNum){
            counter++;
        }else{
            counter = 1;
        }
        if(counter > suprimeCounter){
            suprimeCounter = counter;
            suprimeNumber = currNum;
        }
    }
    let output = '';
    for(let k = 1;k <= suprimeCounter;k++){
        output += suprimeNumber + ' ';
    }
    console.log(output);
    
    }
    maxSequenceEqualElements([2,1,1,2,3,3,2,2,2,1])