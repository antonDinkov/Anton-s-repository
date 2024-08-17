class Vehicle {
    constructor(typeCar, modelCar, partsCar, fuelExpences){ //Параметрите, които се вувеждат от потребителя
        this.type = typeCar;   //С this декларираме свойства на бъдещият обект
        this.model = modelCar;  //Моделът на колата ще е равен на въведеното от потребителщ за модел на колата.
        this.parts = partsCar; //parts получчава обект partsCar, към който добавяме свойството quality.
        partsCar.quality = partsCar.engine * partsCar.power;
        this.fuel = fuelExpences;
    }
    drive (fuelLoss) {
    this.fuel -= fuelLoss;
    }
}
let parts = { engine: 6, power: 100 };

let vehicle = new Vehicle('a', 'b', parts, 200);

vehicle.drive(100);

console.log(vehicle.fuel);

console.log(vehicle.parts.quality);
