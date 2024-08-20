function catalogue(arr){
let obj = {};
for (const iterator of arr) {
    let [key, value] = iterator.split(' : ');
    obj[key] = Number(value);
}
let keys = Object.keys(obj).sort((a,b) => a.localeCompare(b));
let sortedObj = {};
for (const iterator of keys) {
    let firstLetter = iterator[0];
    if(!sortedObj[firstLetter]){
        sortedObj[firstLetter] = {};
    }
    sortedObj[firstLetter][iterator] = obj[iterator];
}

for (let letter in sortedObj) {
    console.log(letter);
    for (let key in sortedObj[letter]) {
        console.log(`  ${key}: ${sortedObj[letter][key]}`);
    }
}

}
catalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);
/* catalogue(['Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59']); */
    /* A 
      Anti-Bug Spray: 15
      Apple: 1.25
      Appricot: 20.4
    B  
      Boiler: 300
    D 
      Deodorant: 10 
    F
      Fridge: 1500 
    T 
      T-Shirt: 10
      TV: 1499 */