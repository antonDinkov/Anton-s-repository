function travelTime(arr){

let destinations = {};
for (const iterator of arr) {
    let [country, town, price] = iterator.split(' > ');
    price = Number(price);
    
    if(!destinations[country]){
        destinations[country] = new Map
        destinations[country].set(town, price);
        continue;
    }
    if(destinations[country].has(town)){
        let oldPrice = destinations[country].get(town);
        if(oldPrice <= price){
            continue;
        }else{
            destinations[country].set(town, price);
        }
    }else{
        destinations[country].set(town, price);
    }
}

let objToArr = Object.entries(destinations).sort(([a1], [a2]) => a1.localeCompare(a2));// Sorting by country name

for (let i = 0; i < objToArr.length; i++) {
    let townArrays = Array.from(objToArr[i][1]);
    townArrays.sort(([a1, b1], [a2, b2]) => b1 - b2);
    objToArr[i][1] = townArrays;
}

for (const [nation, townArr] of objToArr) {
    let townsArrs = [];
    for (const [currTown, currPrice] of townArr) {
        townsArrs.push(`${currTown} -> ${currPrice}`);
    }
    console.log(`${nation} -> ${townsArrs.join(' ')}`);
}

}
travelTime(["Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"]);
/* travelTime(['Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10']); */