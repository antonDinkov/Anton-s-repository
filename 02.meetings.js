function meetings(arr){

let agenda = {};
for (const iterator of arr) {
    const [weekDay, name] = iterator.split(' ');
    if(!agenda.hasOwnProperty(weekDay)){
        agenda[weekDay] = name;
        console.log(`Scheduled for ${weekDay}`);
    }else{
        console.log(`Conflict on ${weekDay}!`);
    }
}
for (const key in agenda) {
    console.log(`${key} -> ${agenda[key]}`);
}

}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])