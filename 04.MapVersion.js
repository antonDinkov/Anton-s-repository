function storage(arr){

    const stored = new Map();
    for (const iterator of arr) {
        let [item, quantity] = iterator.split(' ');
        quantity = Number(quantity);
        if(stored.has(item)){
            stored.set(item, stored.get(item) + quantity);
        }else{
            stored.set(item, quantity);
        }
    }
    for (const [key, value] of stored) {
        console.log(`${key} -> ${value}`);
    }
    
    }
    storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])