function addandRemoveElements(arr){

let n = 1;
let output = [];
for (const element of arr) {
    if (element === 'add') {
        output.push(n);
    } else {
        output.pop();
    }
    n++;
}
if (output.length === 0) {
    console.log('Empty');
} else {
    console.log(output.join('\n'));
}

}
addandRemoveElements(['add',  

    'add',  
    
    'add',  
    
    'add'])
addandRemoveElements(['add',  

    'add',  
    
    'remove',  
    
    'add',  
    
    'add'])
    addandRemoveElements(['remove',  

        'remove',  
        
        'remove'])