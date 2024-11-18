function sortArray2Criteria(arr){

arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
console.log(arr.join('\n'));

}
sortArray2Criteria(['alpha',  

    'beta',  
    
    'gamma'])
sortArray2Criteria(['Isacc',  

    'Theodor',  
    
    'Jack',  
    
    'Harrison',  
    
    'George'])
sortArray2Criteria(['test',  

    'Deny',  
    
    'omen',  
    
    'Default'])