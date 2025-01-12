function adAstra(arr){

let str = arr.shift();
const regex = /([#|])([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d{1,4}|10000)\1/g;
let matches = [...str.matchAll(regex)];

let sumCalories = 0;
for (const iterator of matches) {
    let currCalories = Number(iterator[4]);
    sumCalories += currCalories
}
let days = Math.floor(sumCalories/2000);
console.log(`You have food to last you for: ${days} days!`);
for (const [notImportant, notImportant2, food, date, calories] of matches) {
    console.log(`Item: ${food}, Best before: ${date}, Nutrition: ${calories}`);
}

}
adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);