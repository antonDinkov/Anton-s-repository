function hospital(input){

let period = Number(input[0]);
let doctors = 7;
let treatedPatients = 0;
let untreatedPatients = 0;


for(let i = 1;i <= period;i++){
    let currentPatients = Number(input[i]);
    if(i%3 === 0 && untreatedPatients > treatedPatients){
        doctors++;
    }
    if(currentPatients>doctors){
        treatedPatients += doctors;
        untreatedPatients += (currentPatients-doctors);
    }else{
        treatedPatients += currentPatients;
    }
}

console.log(`Treated patients: ${treatedPatients}.\nUntreated patients: ${untreatedPatients}.`);

}
hospital(['4','7','27','9','1'])