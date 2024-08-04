function deckOfCards(arr){

let listOfCards = arr.shift().split(', ');
let num = Number(arr.shift());
for(let i = 1; i <= num; i++){
    let tokens = arr.shift().split(', ');
    let command = tokens.shift();
    switch(command){
        case 'Add':
            let cardToAdd = tokens.shift();
            if(listOfCards.includes(cardToAdd)){
                console.log('Card is already in the deck');
            }else{
                listOfCards.push(cardToAdd);
                console.log('Card successfully added');
            }
            break;
            case 'Remove':
                let cardToRemove = tokens.shift();
                if(!listOfCards.includes(cardToRemove)){
                    console.log('Card not found');
                }else{
                    let idx = listOfCards.indexOf(cardToRemove);
                    listOfCards.splice(idx, 1);
                    console.log('Card successfully removed');
                }
                break;
                case 'Remove At':
                    let removeAtIdx = Number(tokens.shift());
                    if(removeAtIdx>=0 && removeAtIdx<listOfCards.length){
                        listOfCards.splice(removeAtIdx, 1);
                        console.log('Card successfully removed');
                    }else{
                        console.log('Index out of range');
                    }
                    break;
                    case 'Insert':
                        let insertAtIdx = Number(tokens.shift());
                        let cardToInsert = tokens.shift();
                        if((insertAtIdx>=0 && insertAtIdx<listOfCards.length) && !listOfCards.includes(cardToInsert)){
                            listOfCards.splice(insertAtIdx, 0, cardToInsert);
                            console.log('Card successfully added');
                        }else{
                            if(!(insertAtIdx>=0 && insertAtIdx<listOfCards.length)){
                                console.log('Index out of range');
                            }else{
                                console.log('Card is already added');
                            }
                        }
                        break;
    }
}
console.log(listOfCards.join(', '));

}
//deckOfCards(['Ace of Diamonds, Queen of Hearts, King of Clubs', '3', 'Add, King of Diamonds', 'Insert, 2, Jack of Spades', 'Remove, Ace of Diamonds']);
//deckOfCards(['Two of Clubs, King of Spades, Five of Spades, Jack of Hearts', '2', 'Add, Two of Clubs', 'Remove, Five of Hearts']);
deckOfCards(['Jack of Spades, Ace of Clubs, Jack of Clubs', '2', 'Insert, -1, Queen of Spades', 'Remove At, 1']);