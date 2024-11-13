function rotateArray(arr, num){

for (let i = 0; i < num; i++) {
    let toPush = arr.pop();
    arr.unshift(toPush);
}
console.log(arr.join(' '));

}
rotateArray(['1',  

    '2',  
    
    '3','4'],  

2)
rotateArray(['Banana',  

    'Orange','Coconut',  

'Apple'],  

15)