function heartDelivery(arr){

let neighborhood = arr.shift().split('@').map(Number);
let commands = arr.shift();
let idx = 0;
let alreadyCelebrated = [];
while(commands !== 'Love!'){
    let command = commands.split(' ');
    let length = Number(command[1]);
    idx += length;
    if (idx >= neighborhood.length){
        idx = 0;
    }
    if(neighborhood[idx] === 0){
        console.log(`Place ${idx} already had Valentine's day.`);
        commands = arr.shift();
        continue;
    }
    neighborhood[idx] -= 2
    if(neighborhood[idx] <= 0){
        console.log(`Place ${idx} has Valentine's day.`);
        alreadyCelebrated.push(idx);
    }
    commands = arr.shift();
}
console.log(`Cupid's last position was ${idx}.`);
let afterParty = neighborhood.filter(el => el === 0);
let difference = neighborhood.length - afterParty.length;
if(difference === 0){
    console.log('Mission was successful.');
}else{
    console.log(`Cupid has failed ${difference} places.`);
}

}
//heartDelivery(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!']);
heartDelivery(['2@4@2', 'Jump 2', 'Jump 2', 'Jump 8', 'Jump 3', 'Jump 1', 'Love!']);