function commonElements(input1, input2){

for(let i of input1){
    for(let j of input2){
        if(i === j){
            console.log(i);
        }
    }
}

}
commonElements(['Hey', 'hello', 2, 4,'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);