function convertToJSON(firstName, lastName, hairColor){

const person = {
    name: firstName,
    lastName,
    hairColor
}
let converted = JSON.stringify(person);
console.log(converted);

}
convertToJSON('George', 'Jones', 'Brown');
//convertToJSON('Peter', 'Smith', 'Blond');