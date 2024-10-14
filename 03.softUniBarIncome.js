function softUniBarIncome(arr){

const regex = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>[A-Za-z]+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.\d+]*(?<price>\d+(\.\d+)?)\$/;
//const lecto = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^\d|$%.]*(?<price>\d+\.?\d+)\$/;
//const regex1 = /%(?<customer>[A-Z][a-z]+)%(?<excluded>[^|$%.]*)<(?<product>[A-Za-z]+)>\k<excluded>\|(?<count>\d+)\|[^|$%.\d+]*(?<price>\d+(\.\d+)?)\$/;
//Това което изключвам [^|$%.] немога да го групирам в (), защото си противоречи със същността на групирането - да бъде запазено за по късно!
let order = arr.shift();
let totalIncome = 0;
while(order !== 'end of shift'){
    let matches = order.match(regex);
    if(matches){
        console.log(`${matches.groups.customer}: ${matches.groups.product} - ${(Number(matches.groups.count) * Number(matches.groups.price)).toFixed(2)}`);
        totalIncome += (Number(matches.groups.count) * Number(matches.groups.price));
    }
    order = arr.shift();
}
console.log(`Total income: ${totalIncome.toFixed(2)}`);

}
softUniBarIncome(['%George%<Croissant>|2|10.3$', '%Peter%<Gum>|1|1.3$', '%Maria%<Cola>|1|2.4$', '%Valid%<Valid>valid|10|valid20$', 'end of shift'])
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$', '%Peter%<Gum>1.3$', '%Maria%<Cola>|1|2.4', '%Valid%<Valid>valid|10|valid20$', 'end of shift'])