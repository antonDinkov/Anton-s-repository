function extractSubsequenceArray(arr){

let biggest = arr.splice(0, 1);
i = 0;
for (const element of arr) {
    if (element >= biggest[i]) {
        biggest.push(element);
        i++;
    }
}
return biggest;

}
extractSubsequenceArray([1,  

    3,  
    
    8,  
    
    4,  
    
    10,  
    
    12,  
    
    3,  
    
    2,  
    
    24])
extractSubsequenceArray([1,  

    2,  
    
    3, 
    
    4])
extractSubsequenceArray([20,  

    3,  
    
    2,  
    
    15, 
    
    6,  
    
    1])