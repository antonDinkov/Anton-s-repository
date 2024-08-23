function convertToObject(str){

let converted = JSON.parse(str);

for (const [key, value] of Object.entries(converted)) {
    console.log(`${key}: ${value}`);
}

}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
//convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');