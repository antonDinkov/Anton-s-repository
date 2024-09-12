function piccolo(arr){

let parkingLot = new Set();
for (const iterator of arr) {
    let tokens = iterator.split(', ');
    let command = tokens[0];
    let carNum = tokens[1];
    switch(command){
        case 'IN':parkingLot.add(carNum);break;
            case 'OUT':parkingLot.delete(carNum);break;
    }
}
if(parkingLot.size === 0){
    console.log('Parking Lot is Empty');
}
const parking = Array.from(parkingLot).sort((a, b) => a.localeCompare(b));
for (const key of parking) {
    console.log(key);
}

}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);
/* piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);  */