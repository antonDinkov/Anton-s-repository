function houseParty(arr){

let guestList = [];
for(message of arr){
    let guest = message.split(' ').shift();
    if(!message.includes('not')){
        if(!guestList.includes(guest)){
            guestList.push(guest);
        }else{
            console.log(`${guest} is already in the list!`);
        }
    }else{
        if(!guestList.includes(guest)){
            console.log(`${guest} is not in the list!`);
        }else{
            for(let i = 0; i < guestList.length; i++){
                let man = guestList[i];
                if(man === guest){
                    guestList.splice(i,1);
                    break;
                }
            }
        }
    }
}
console.log(guestList.join('\n'));

}
houseParty(['Allie is going!', 'George is going', 'John is not going', 'George is not going']);