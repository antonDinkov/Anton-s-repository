function aMinerTask(arr){

const output = new Map()
for(let i = 0; i < arr.length; i += 2){
    let resource = arr[i];
    let quantity = Number(arr[i+1]);
    if(!output.has(resource)){
        output.set(resource, quantity);
        continue;
    }
    output.set(resource, output.get(resource) + quantity);
}
for (const [key, value] of output) {
    console.log(`${key} -> ${value}`);
}

}
aMinerTask(['Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17']);
//aMinerTask([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ]);