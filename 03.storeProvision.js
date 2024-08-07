function storeProvision(currStock, order){
    
let currStockObj = convertToObj(currStock);
let orderObj = convertToObj(order);
let keyStockList = Object.keys(currStockObj);
let outputObj = outputList(currStockObj, orderObj, keyStockList);

let outputStockList = Object.entries(outputObj);
for (const [product, quantity] of outputStockList) {
    console.log(`${product} -> ${quantity}`);
}

function convertToObj(arr){
    let obj = {};
    for(let i = 0;i < arr.length; i+=2){
        obj[arr[i]] = Number(arr[i+1]);
    }
    return obj;
}
function outputList(obj1, obj2, list) {
    for (const key in obj2) {
        if (key in obj1) {
            obj1[key] += obj2[key];
        } else {
            obj1[key] = obj2[key];
            list.push(key);
        }
    }
    return obj1;
}

}
//storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas','14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'], [ 'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30' ]);