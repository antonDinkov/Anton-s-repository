function makeADictionary(arr){

let dictionary = {};

for (const jsonString of arr) {
    const obj = JSON.parse(jsonString);
    const key = Object.keys(obj)[0];
    const value = obj[key];
    dictionary[key] = value;
}

const sortedKeys = Object.keys(dictionary).sort();

for (const key of sortedKeys) {
    const value = dictionary[key];
    console.log(`Term: ${key} => Definition: ${value}`);
}


}
makeADictionary(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehiclecarrying passengers by road,typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves intoelectrical energy variationswhich may then be amplified,transmitted, or recorded."}']);
//makeADictionary();