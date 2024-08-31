function storage(arr){

const stored = {};
for (const iterator of arr) {
    let [item, quantity] = iterator.split(' ');
    quantity = Number(quantity);
    if(stored.hasOwnProperty(item)){
        stored[item] += quantity;
    }else{
        stored[item] = quantity
    }
}
for (const key in stored) {
    console.log(`${key} -> ${stored[key]}`);
}

}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])