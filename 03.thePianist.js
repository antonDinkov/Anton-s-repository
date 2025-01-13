function thePianist(arr){

const n = Number(arr.shift());
let pieces = arr.splice(0, n);
let piecesList = {};
for (const iterator of pieces) {
    let [piece, composer, key] = iterator.split('|');
    piecesList[piece] = {[composer]: key};
}
let stop = arr.shift();
while (stop !== 'Stop') {
    let [command, piece, composer, key] = stop.split('|');
    switch (command) {
        case 'Add':
            if (piecesList[piece]) {
                console.log(`${piece} is already in the collection!`);
            }else{
                piecesList[piece] = {[composer]: key};
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
            break;
            case 'Remove':
                if (piecesList[piece]) {
                    delete piecesList[piece];
                    console.log(`Successfully removed ${piece}!`);
                }else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
                case 'ChangeKey':
                    if (piecesList[piece]) {
                        let composerClone = Object.entries(piecesList[piece])[0];
                        let newKey = composer
                        piecesList[piece][composerClone[0]] = newKey;
                        //поради деструктурирането по-горе composer играе ролята на key!!!
                        console.log(`Changed the key of ${piece} to ${newKey}!`);
                    }else {
                        console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                    }
                    break;
    }

    stop = arr.shift();
}

let piecesListEntries = Object.entries(piecesList);
for (const [piece, entries] of piecesListEntries) {
    let subEntries = Object.entries(entries);
    console.log(`${piece} -> Composer: ${subEntries[0][0]}, Key: ${subEntries[0][1]}`);
}

}
thePianist(['3', 'Fur Elise|Beethoven|A Minor', 'Moonlight Sonata|Beethoven|C# Minor', 'Clair de Lune|Debussy|C# Minor', 'Add|Sonata No.2|Chopin|B Minor', 'Add|Hungarian Rhapsody No.2|Liszt|C# Minor', 'Add|Fur Elise|Beethoven|C# Minor', 'Remove|Clair de Lune', 'ChangeKey|Moonlight Sonata|C# Major', 'Stop'])
//thePianist(['4', 'Eine kleine Nachtmusik|Mozart|G Major', 'La Campanella|Liszt|G# Minor', 'The Marriage of Figaro|Mozart|G Major', 'Hungarian Dance No.5|Brahms|G Minor', 'Add|Spring|Vivaldi|E Major', 'Remove|The Marriage of Figaro', 'Remove|Turkish March', 'ChangeKey|Spring|C Major', 'Add|Nocturne|Chopin|C# Minor','Stop'])