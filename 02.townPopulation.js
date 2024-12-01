function townPopulation(arr){

let output = {};
for (const element of arr) {
    let [townName, townPopulation] = element.split(' <-> ');
    townPopulation = Number(townPopulation);
    if (output[townName]) {
        output[townName] += townPopulation;
    } else {
        output[townName] = townPopulation;
    }
}
for (const key in output) {
    console.log(`${key} : ${output[key]}`);
}

}
townPopulation(['Sofia <-> 1200000', 

    'Montana <-> 20000', 
    
    'New York <-> 10000000', 
    
    'Washington <-> 2345000', 
    
    'Las Vegas <-> 1000000'])
townPopulation(['Istanbul <-> 100000', 

    'Honk Kong <-> 2100004',

    'Jerusalem <-> 2352344', 

    'Mexico City <-> 23401925', 

    'Istanbul <-> 1000'])