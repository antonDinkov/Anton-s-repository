function roadRadar(speed, area){

let areasLimit = {
    'motorway': 130,
    'interstate': 90,
    'city': 50,
    'residential': 20
};

if (speed <= areasLimit[area]) {
    console.log(`Driving ${speed} km/h in a ${areasLimit[area]} zone`);
} else {
    let difference = speed - areasLimit[area];
    let status;
    if (speed <= (areasLimit[area] + 20)) {
        status = 'speeding';
    } else if (speed <= (areasLimit[area] + 40)) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${areasLimit[area]} - ${status}`);
}

}
roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')