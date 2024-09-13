function partyTime(arr){

let listArr = arr.slice(0, arr.indexOf('PARTY'));
let guestArr = arr.slice(arr.indexOf('PARTY')+1);


/* for (let i = 0; i < guestArr.length; i++) {
    let currguest = guestArr[i];
    let found = listArr.find(el => el === currguest);
    if(found){
        listArr.splice(listArr.indexOf(found), 1);
    }
} */
for (const iterator of guestArr) {              //Забележка!!! Да не итерирам през масиви, които мутирам по време на итерациите.
    if(listArr.includes(iterator)){             //Води до грешки!
        let index = listArr.indexOf(iterator);
        listArr.splice(index, 1);
    }
}
console.log(listArr.length);

let vip = [];
let regular = [];
for (const iterator of listArr) {
    if(iterator.charCodeAt(0) >= 48 && iterator.charCodeAt(0) <= 57){
        vip.push(iterator);
    }else{
        regular.push(iterator);
    }
}

for (const iterator of vip) {
    console.log(iterator);
}
for (const iterator of regular) {
    console.log(iterator);
}

}
partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc' ]);