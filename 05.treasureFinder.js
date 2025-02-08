function treasureFinder(arr){

let key = arr.shift().split(' ').map(Number);
let find = arr.shift();
let typeRegex = /&.+&/;
let coordinateRegex = /<.+>/;

while (find !== 'find') {
    let i = 0;
    let j = 0;
    let findArr = find.split('')
    for (const char of find) {
        let code = char.charCodeAt(0);
        code -= key[j]
        let newChar = String.fromCharCode(code)
        findArr[i] = newChar;
        i++;
        j++;
        if (j === key.length) {
            j = 0;
        }
    }
    find = findArr.join('');
    let type = find.match(typeRegex)[0].split('');
    type.shift();
    type.pop();
    let coordinate = find.match(coordinateRegex)[0].split('');
    coordinate.shift();
    coordinate.pop();
    console.log(`Found ${type.join('')} at ${coordinate.join('')}`);
    
    find = arr.shift();
}

}
treasureFinder(["1 2 1 3", 

    "ikegfp'jpne)bv=41P83X@", 
    
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA", 
    
    "find"])
treasureFinder(["1 4 2 5 3 2 1", 

    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`, 
    
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC", 
    
    "'stj)>34W68Z@", 
    
    "find"])