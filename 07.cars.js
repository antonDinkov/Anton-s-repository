function cars(arr){

const objs = {}
for (const element of arr) {
    const [command, name, token1, token2] = element.split(' ');
    if (command === 'create') {
        if (token1 !== 'inherit') {
            objs[name] = {};
        } else {
            objs[name] = Object.create(objs[token2]);
        }
    } else if (command === 'set') {
        objs[name][token1] = token2;
    } else if (command === 'print') {
        let toPrint = [];
        for (const key in objs[name]) {
            toPrint.push(`${key}:${objs[name][key]}`);
        }
        console.log(toPrint.join(','));
    }
}

}
cars(['create c1', 

    'create c2 inherit c1', 
    
    'set c1 color red', 
    
    'set c2 model new', 
    
    'print c1', 
    
    'print c2'])