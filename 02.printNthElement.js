function printNthElement(array, n){

let output = [];
for (let i = 0; i < array.length; i += n) {
    const element = array[i];
    output.push(element)
}
return output;

}
printNthElement(['5',  

    '20',  
    
    '31',  
    
    '4',  
    
    '20'],  
    
    2)
printNthElement(['dsa', 

    'asd',  
    
    'test',  
    
    'tset'],  
    
    2)
printNthElement(['1',  

    '2', 
    
    '3',  
    
    '4',  
    
    '5'],  
    
    6 )