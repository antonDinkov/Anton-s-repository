class Laptop {
    constructor(information,  quality){
        this.info = information;
        this.isOn = false;
        this.quality = quality;
    }
    turnOn () {
        this.quality--;
        return this.isOn = true;
    }
    turnOff () {
        this.quality--;
        return this.isOn = false;
    }
    showInfo () {
        let toJSON = JSON.stringify(this.info);
        return toJSON;
    }
    //getter - извиква функцията като свойство
    get price () {
        let price = (800 - (this.info.age * 2)) + (this.quality * 0.5);
        return price;
    }
}






let info = {producer: "Dell", age: 2, brand: "XPS"} 

let laptop = new Laptop(info, 10) 

laptop.turnOn() 

console.log(laptop.showInfo()) 

laptop.turnOff() 

console.log(laptop.quality) 

laptop.turnOn() 

console.log(laptop.isOn) 

console.log(laptop.price) 
