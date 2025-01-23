function pirates(arr){

let target = {};

let firstOperation = arr.shift();
while (firstOperation !== 'Sail') {
    let [city, population, gold] = firstOperation.split('||')
    if (target[city]) {
        target[city].Population += Number(population);
        target[city].Gold += Number(gold);
    } else {
        target[city] = {'Population': Number(population), 'Gold': Number(gold)};
    }
    firstOperation = arr.shift();
}

let secondOpration = arr.shift();
while (secondOpration !== 'End') {
    let [command, town, token1, token2] = secondOpration.split('=>');
    if (command === 'Plunder') {
        let people = Number(token1);
        let gold = Number(token2);
        target[town].Population -= people;
        target[town].Gold -= gold;
        console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
        if (target[town].Population <= 0 || target[town].Gold <= 0) {
            console.log(`${town} has been wiped off the map!`);
            delete target[town];
        }
    } else {
        let gold = Number(token1);
        if (gold < 0) {
            console.log('Gold added cannot be a negative number!');
        }else {
            target[town].Gold += gold;
            console.log(`${gold} gold added to the city treasury. ${town} now has ${target[town].Gold} gold.`);
        }
    }
    secondOpration = arr.shift();
}
let targetEntries = Object.entries(target);
if (targetEntries.length > 0) {
    console.log(`Ahoy, Captain! There are ${targetEntries.length} wealthy settlements to go to:`);
    for (const [town, {Population, Gold}] of targetEntries) {
        console.log(`${town} -> Population: ${Population} citizens, Gold: ${Gold} kg`);
    }
} else {
    console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
}

}
pirates(["Tortuga||345000||1250", "Santo Domingo||240000||630", "Havana||410000||1100", "Sail", "Plunder=>Tortuga=>75000=>380", "Prosper=>Santo Domingo=>180", "End"])
pirates(["Nassau||95000||1000", "San Juan||930000||1250", "Campeche||270000||690", "Port Royal||320000||1000", "Port Royal||100000||2000", "Sail", "Prosper=>Port Royal=>-200", "Plunder=>Nassau=>94000=>750", "Plunder=>Nassau=>1000=>150", "Plunder=>Campeche=>150000=>690", "End"])