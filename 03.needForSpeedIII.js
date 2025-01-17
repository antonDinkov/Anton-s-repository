function needForSpeedIII(arr){

let carsNum = arr.shift();
let carsSlice = arr.slice(0, carsNum);
let arrOfCommands = arr.slice(carsNum);
let cars = {};
carsSlice.forEach(element => {
    let elementArr = element.split('|');
    let currKey = elementArr[0];
    let currValue = {
        'mileage': Number(elementArr[1]),
        'fuel': Number(elementArr[2])
    }
    cars[currKey] = currValue;
});

let stop = arrOfCommands.shift();
while (stop !== 'Stop') {
    let tokens = stop.split(' : ');
    let command = tokens.shift();
    let car = tokens.shift();
    switch(command){
        case 'Drive':
            let [distance, fuel_] = tokens.map(Number);
            if (cars[car].fuel < fuel_) {
                console.log('Not enough fuel to make that ride');
                break;
            }
            cars[car].mileage += distance;
            cars[car].fuel -= fuel_;
            console.log(`${car} driven for ${distance} kilometers. ${fuel_} liters of fuel consumed.`);
            if (cars[car].mileage >= 100000) {
                console.log(`Time to sell the ${car}!`);
                delete cars[car];
            }
            break;
            case 'Refuel':
                let fuelToRefuel = Number(tokens.shift());
                if ((fuelToRefuel + cars[car].fuel) > 75){
                    fuelToRefuel = fuelToRefuel - (fuelToRefuel + cars[car].fuel - 75);
                }
                cars[car].fuel += fuelToRefuel;
                console.log(`${car} refueled with ${fuelToRefuel} liters`);
                break;
                case 'Revert':
                    let kilometers = Number(tokens.shift());
                    if ((cars[car].mileage - kilometers) < 10000) {
                        cars[car].mileage = 10000;
                        break;
                    }
                    cars[car].mileage -= kilometers;
                    console.log(`${car} mileage decreased by ${kilometers} kilometers`);
                    break;
    }

    stop = arrOfCommands.shift();
}
for (const key in cars) {
    console.log(`${key} -> Mileage: ${cars[key].mileage} kms, Fuel in the tank: ${cars[key].fuel} lt.`);
}

}
needForSpeedIII(['3', 'Audi A6|38000|62', 'Mercedes CLS|11000|35', 'Volkswagen Passat CC|45678|5', 'Drive : Audi A6 : 543 : 47', 'Drive : Mercedes CLS : 94 : 11', 'Drive : Volkswagen Passat CC : 69 : 8', 'Refuel : Audi A6 : 50', 'Revert : Mercedes CLS : 500', 'Revert : Audi A6 : 30000', 'Stop'])
//needForSpeedIII(['4', 'Lamborghini Veneno|11111|74', 'Bugatti Veyron|12345|67', 'Koenigsegg CCXR|67890|12', 'Aston Martin Valkryie|99900|50', 'Drive : Koenigsegg CCXR : 382 : 82', 'Drive : Aston Martin Valkryie : 99 : 23', 'Drive : Aston Martin Valkryie : 2 : 1', 'Refuel : Lamborghini Veneno : 40', 'Revert : Bugatti Veyron : 2000', 'Stop' ])