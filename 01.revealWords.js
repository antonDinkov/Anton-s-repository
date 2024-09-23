function revealWords(replacements, sentence) {
    const replacementsArr = replacements.split(', ');
    const sentenceArr = sentence.split(' ');

    
    for (let i = 0; i < sentenceArr.length; i++) {
        if (sentenceArr[i].includes('*')) {
            
            for (const replacement of replacementsArr) {
                if (replacement.length === sentenceArr[i].length) {
                    sentenceArr[i] = replacement;
                    break; 
                }
            }
        }
    }

    
    console.log(sentenceArr.join(' '));
}
//revealWords('great', 'softuni is ***** place for learning new programming languages');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');