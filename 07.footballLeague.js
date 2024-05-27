function footballLeague(input){

let capacityStadion = Number(input[0]);
let fansNum = Number(input[1]);
let ocupationPercent = ((fansNum/capacityStadion)*100).toFixed(2);

let aSector = 0;
let bSector = 0;
let vSector = 0;
let gSector = 0;

for(let i = 2;i < input.length;i++){
    let currentSector = input[i];
    switch(currentSector){
        case 'A':aSector++;break;
        case 'B':bSector++;break;
        case 'V':vSector++;break;
        case 'G':gSector++;break;
    }
}

let aPercent = ((aSector/fansNum)*100).toFixed(2);
let bPercent = ((bSector/fansNum)*100).toFixed(2);
let vPercent = ((vSector/fansNum)*100).toFixed(2);
let gPercent = ((gSector/fansNum)*100).toFixed(2);

console.log(`${aPercent}%
${bPercent}%
${vPercent}%
${gPercent}%
${ocupationPercent}%`);

}
footballLeague(['76','10','A','V','V','V','G','B','A','V','B','B'])