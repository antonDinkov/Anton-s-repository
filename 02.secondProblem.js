function secondProblem(arr){

let n = arr.shift();
let regex = /!(?<command>[A-Z][a-z]{2,})!:\[(?<string>[A-Za-z]{8,})\]/;
for (const element of arr) {
    let match = element.match(regex);
    if (!match) {
        console.log('The message is invalid');
    } else {
        let translatedString = match.groups.string.split('');
        translatedString = translatedString.map((element) => element.charCodeAt(0));
        console.log(`${match.groups.command}: ${translatedString.join(' ')}`);
    }
}

}
secondProblem(["2", "!Send!:[IvanisHere]", "*Time@:[Itis5amAlready"])
secondProblem(["3", "go:[outside]", "!drive!:YourCarToACarWash", "!Watch!:[LordofTheRings]"])