function flightSchedule(arr){

let flights = arr.shift();
let newStatuses = arr.shift();
let statusToCheck = arr.shift();

let flightsObj = {};
for (const element of flights) {
    let newElement = element.split(/\s/);
    let flightNum = newElement.shift();
    let destination = newElement.join(' ');
    flightsObj[flightNum] = {'destination': destination, 'status': 'Ready to fly'};
}

for (let element of newStatuses) {
    let [flightNum, status] = element.split(' ');
    if (flightsObj[flightNum]) {
        flightsObj[flightNum].status = 'Cancelled';
    }
   
}
if (statusToCheck[0] === 'Ready to fly') {
    for (let [flightNum, object] of Object.entries(flightsObj)) {
        if (object.status === 'Ready to fly') {
            console.log(`{ Destination: '${object.destination}', Status: '${object.status}' }`);
        }
    }
} else {
    for (let [flightNum, object] of Object.entries(flightsObj)) {
        if (object.status === 'Cancelled') {
            console.log(`{ Destination: '${object.destination}', Status: '${object.status}' }`);
        }
    }
}

}
flightSchedule([['WN269 Delaware', 

    'FL2269 Oregon', 
 
     'WN498 Las Vegas', 
 
     'WN3145 Ohio', 
 
     'WN612 Alabama', 
 
     'WN4010 New York', 
 
     'WN1173 California', 
 
     'DL2120 Texas', 
 
     'KL5744 Illinois', 
 
     'WN678 Pennsylvania'], 
 
     ['DL2120 Cancelled', 'WN612 Cancelled', 

'WN1173 Cancelled', 

'SK430 Cancelled'], 

['Cancelled'] 

])
/* flightSchedule([['WN269 Delaware', 

    'FL2269 Oregon', 
 
     'WN498 Las Vegas', 
 
     'WN3145 Ohio', 
 
     'WN612 Alabama', 
 
     'WN4010 New York', 
 
     'WN1173 California', 
 
     'DL2120 Texas', 
 
     'KL5744 Illinois', 
 
     'WN678 Pennsylvania'], 
 
     ['DL2120 Cancelled', 
 
 'WN612 Cancelled', 
 
 'WN1173 Cancelled', 
 
 'SK330 Cancelled'], 
 
 ['Ready to fly'] 
 
 ]) */