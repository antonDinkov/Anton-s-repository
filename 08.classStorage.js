class Storage {
    constructor(capability){
        this.capacity = capability;
        this.storage = [];
        this.totalCost = 0;
    };
    addProduct (productObj) {
        this.storage.push(productObj);
        this.capacity -= productObj.quantity;
        const totalPrice = productObj.quantity*productObj.price;
        this.totalCost += totalPrice;
    };
    getProducts () {
        let newStorage = [];
        for (const iterator of this.storage) {
            newStorage.push(JSON.stringify(iterator));
        }
        return newStorage.join('\n');
    };
}
let productOne = {name: 'Cucamber',

    price: 1.50, quantity: 15};
    
    let productTwo = {name: 'Tomato',
    
    price: 0.90, quantity: 25};
    
    let productThree = {name: 'Bread',
    
    price: 1.10, quantity: 8};
    
    let storage = new Storage(50);
    
    storage.addProduct(productOne);
    
    storage.addProduct(productTwo);
    
    storage.addProduct(productThree);
    
    console.log(storage.getProducts());
    
    console.log(storage.capacity);
    
    console.log(storage.totalCost);