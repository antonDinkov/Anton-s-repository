function bills(input){

let monthsNum = Number(input[0]);
let waterExpences = monthsNum * 20;
let internetExpences = monthsNum * 15;
let waterAndInternet = 35;
let elExpences = 0;
let otherExpences = 0;

for(let i = 1;i <= monthsNum;i++){
    let currentEl = Number(input[i]);
    elExpences += currentEl;
    let currentOther = (currentEl + waterAndInternet)*1.2;
    otherExpences += currentOther;
}

let averageExpencesPerMonth = (elExpences + waterExpences + internetExpences + otherExpences)/monthsNum;

console.log(`Electricity: ${elExpences.toFixed(2)} lv
Water: ${waterExpences.toFixed(2)} lv
Internet: ${internetExpences.toFixed(2)} lv
Other: ${otherExpences.toFixed(2)} lv
Average: ${averageExpencesPerMonth.toFixed(2)} lv`);

}
bills(['5','68.63','89.25','132.53','93.53','63.22'])