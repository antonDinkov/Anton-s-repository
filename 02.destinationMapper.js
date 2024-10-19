function destinationMapper(arr){

const regex = /([=/])([A-Z][a-zA-Z]{2,})\1/g;
let matches = arr.shift().match(regex);
if (matches) {
    let cleanedMatches = matches.map(place => place.replace(/^[=/]|[=/]$/g, ''));
    const outputMatches = cleanedMatches.join(', ');
    let points = 0;
    for (const iterator of cleanedMatches) {
        points += iterator.length;
    }
    console.log(`Destinations: ${outputMatches}\nTravel Points: ${points}`);
}else{
    console.log('Destinations:\nTravel Points: 0');
}

}
destinationMapper(['=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i='])
destinationMapper(['ThisIs some InvalidInput'])