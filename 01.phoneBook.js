function phoneBook(arr){

const phoneList = {};
for (const iterator of arr) {
    const [name, number] = iterator.split(' ');
    phoneList[name] = number;
}
for (const key in phoneList) {
    console.log(`${key} -> ${phoneList[key]}`);
}

}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])