function employees(arr){

const emploee = [];
for (const name of arr) {
    let persNum = name.length;
    const emploeeObj = {
        name,
        personalN: persNum
    }
    emploee.push(emploeeObj);
}

for (const obj of emploee) {
    console.log(`Name: ${obj.name} -- Personal Number: ${obj.personalN}`);
}

}
employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
//employees(['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland']);