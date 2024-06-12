function dungeonestDark(input){

let newInput = input[0];
let newArr = newInput.split('|');
let arrToFillIn = [];
for(let i = 0;i < newArr.length;i++){
    let finalInput = newArr[i];               //This foor-loop creates the array I need.
    let finalArr = finalInput.split(' ');
    arrToFillIn.push(finalArr[0]);
    arrToFillIn.push(Number(finalArr[1]));
}

let health = 100;
let coins = 0;
let counter = 0;
for(let j = 0;j < arrToFillIn.length;j += 2){
    counter++;
    let itemOrMonster = arrToFillIn[j];
    let points = arrToFillIn[j+1];
    switch(itemOrMonster){
        case 'potion': let temp = health; health += points;
        if(health > 100){health = 100; points = 100-temp};
        console.log(`You healed for ${points} hp.\nCurrent health: ${health} hp.`);
        break;
        case 'chest': coins += points;
        console.log(`You found ${points} coins.`);
        break;
        default: health -= points;
        if(health > 0){
            console.log(`You slayed ${itemOrMonster}.`);
        }else{
            console.log(`You died! Killed by ${itemOrMonster}.\nBest room: ${counter}`);
            return;
        }
    }
}
console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);

}
dungeonestDark(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);