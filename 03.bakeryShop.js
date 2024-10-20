function bakeryShop(arr){

let stop = arr.shift();
let store = {};
let soldCounter = 0;
while (stop !== 'Complete') {
    let [command, quantity, food] = stop.split(' ');
    quantity = Number(quantity);
    switch (command) {
        case 'Receive':
            if (quantity <= 0){
                break;
            }
            if (!store[food]) {
                store[food] = quantity;
            }else{
                store[food] += quantity;
            }
            break;
            case 'Sell':
                if (!store[food]) {
                    console.log(`You do not have any ${food}.`);
                    break;
                }
                if (quantity > store[food]) {
                    console.log(`There aren't enough ${food}. You sold the last ${store[food]} of them.`);
                    soldCounter += store[food];
                    store[food] = 0;
                    delete store[food];
                }else{
                    console.log(`You sold ${quantity} ${food}.`);
                    store[food] -= quantity;
                    soldCounter += quantity;
                    if (store[food] === 0) {
                        delete store[food];
                    }
                }
                break;
    }

    stop = arr.shift();
}

let storeArr = Object.entries(store);
for (const [food, quantity] of storeArr) {
    console.log(`${food}: ${quantity}`);
}
console.log(`All sold: ${soldCounter} goods`);

}
bakeryShop(['Receive 105 cookies', 'Receive 10 donuts', 'Sell 10 donuts', 'Sell 1 bread', 'Complete'])
//bakeryShop(['Receive 10 muffins', 'Receive 23 bagels', 'Sell 5 muffins', 'Sell 10 bagels', 'Complete'])