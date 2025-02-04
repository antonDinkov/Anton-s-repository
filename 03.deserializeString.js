function deserializeString(arr){

let tokens = arr.shift();
let outputArr = [];
while (tokens !== 'end') {
    let [char, idxs] = tokens.split(':');
    let idxsArr = idxs.split('/').map(Number);
    for (const idx of idxsArr) {
        outputArr[idx] = char;
    }
    tokens = arr.shift();
}
console.log(outputArr.join(''));

}
deserializeString(['a:0/2/4/6', 

    'b:1/3/5', 
    
    'end'])
deserializeString(['a:0/3/5/11', 

    'v:1/4', 
    
    'j:2', 
    
    'm:6/9/15', 
    
    's:7/13', 
    
    'd:8/14', 
    
    'c:10', 
    
    'l:12', 
    
    'end'])