function censoredWords(str, toRemove){

    let censoredWord = '*'.repeat(toRemove.length);
    while(str.includes(toRemove)){
        str = str.replace(toRemove, censoredWord);
    }
    console.log(str);
}
censoredWords('A small sentence with some words', 'small')