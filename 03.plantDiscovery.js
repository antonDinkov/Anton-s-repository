function plantDiscovery(arr){

const n = Number(arr.shift());
const plantsArr = arr.splice(0, n);
let plantsArrOfObj = [];
for (const iterator of plantsArr) {
    let [plant, rare] = iterator.split('<->');
    let plants = {
        name: plant,
        rarity: Number(rare),
        ratings: []
    }
    plantsArrOfObj.push(plants)
}
let exhibition = arr.shift();
while(exhibition !== 'Exhibition'){
    let [command, plant, ratingRarity] = exhibition.split(' ').filter(el => el !== '-');
    ratingRarity = Number(ratingRarity);
    let objIdx = findObjIdx(plantsArrOfObj, plant);
    if(objIdx === 'undefined' && objIdx === 0){
        arr.shift();
        console.log('error');
        continue;
    }
    switch (command) {
        case 'Rate:':
            plantsArrOfObj[objIdx].ratings.push(ratingRarity);
            break;
            case 'Update:':
                plantsArrOfObj[objIdx].rarity = ratingRarity
                break;
                case 'Reset:':
                    plantsArrOfObj[objIdx].ratings = [];
                    break;
    }



    exhibition = arr.shift();
}
console.log('Plants for the exhibition:');
for (const iterator of plantsArrOfObj) {
    console.log(`- ${iterator.name}; Rarity: ${iterator.rarity}; Rating: ${averageRating(iterator).toFixed(2)}`);
}


function findObjIdx(array, nameValue){
    for (let i = 0; i < array.length; i++) {
        let currObj = array[i];
        let values = Object.values(currObj)
        if (values.includes(nameValue)){
            return i;
        }
    }
};
function averageRating(object){
    let ratingArr = object.ratings;
    let sum = 0;
    if (ratingArr.length === 0){
        return 0;
    }
    for(let i = 0; i < ratingArr.length; i++){
        sum += ratingArr[i];
    }
    let average = sum / ratingArr.length;
    return average;
};
}
//plantDiscovery((["3", "Arnoldii<->4", "Woodii<->7", "Welwitschia<->2", "Rate: Woodii - 10", "Rate: Welwitschia - 7", "Rate: Arnoldii - 3", "Rate: Woodii - 5", "Update: Woodii - 5", "Reset: Arnoldii", "Exhibition"]))
plantDiscovery((["2", "Candelabra<->10", "Oahu<->10", "Rate: Oahu - 7", "Rate: Candelabra - 6", "Exhibition"]))