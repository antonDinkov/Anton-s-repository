function train(arr){

let wagons = arr
    .shift()
    .split(' ')
    .map(Number);;
let wagsCapacity = Number(arr.shift());
for(commands of arr){
    if(commands.includes('Add')){
        let newWag = Number(commands
            .split(' ')
            .pop());
        wagons.push(newWag);
        continue;
    }
    let passengersToFitInto = Number(commands);
    let counter = 0;
    for(currWagon of wagons){
        if((wagsCapacity-currWagon) >= passengersToFitInto){
            wagons[counter] += passengersToFitInto;
            break;
        }
        counter++;
    }
}
console.log(wagons.join(' '));

}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75'])