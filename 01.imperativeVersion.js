function revealWords(replacements, sentence) {
    const replacementsArr = replacements.split(', ');
    const sentenceArr = sentence.split(' ');
    const toBeReplaced = sentenceArr.filter(el => el.includes('*'));
    
    for (const iterator of replacementsArr) {
        const correctOne = toBeReplaced.find(el => el.length === iterator.length);
        sentence = sentence.replace(correctOne, iterator);
    }
    console.log(sentence);
}
//revealWords('great', 'softuni is ***** place for learning new programming languages');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');