function monkeyPatcher (command) {

this.score = function () {
    const output = [];
    let rating;
    let upvote = this.upvotes;
    let downvote = this.downvotes;
    let tally = upvote-downvote;
    let totalVotes = upvote + downvote;
    if (totalVotes > 50) {
        let biggerOne;
        if (upvote > downvote) {
            biggerOne = this.upvotes;
        } else {
            biggerOne = this.downvotes;
        }
        let toAdd = Math.ceil(biggerOne*0.25)
        upvote += toAdd;
        downvote += toAdd;
    }
    output.push(upvote);
    output.push(downvote);
    output.push(tally);
    let positivePercentage = (this.upvotes/totalVotes)*100;
    if (totalVotes < 10) {
        rating = 'new';
    } else if (positivePercentage > 66) {
        rating = 'hot';
    } else if (positivePercentage <= 66 && tally >= 0 && totalVotes > 100) {
        rating = 'controversial';
    } else if (tally < 0) {
        rating = 'unpopular';
    }
    output.push(rating);
    return output;
}
/* this.up = () => this.upvotes++;
this.down = () => this.downvotes++; */

if (command === 'upvote') {
    /* this.up(); */
    this.upvotes++;
} else if (command === 'downvote') {
    /* this.down(); */
    this.downvotes++;
} else if (command === 'score') {
    return this.score();
}

}
let post = { 

    id: '3', 

    author: 'emil', 

    content: 'wazaaaaa', 

    upvotes: 100, 

    downvotes: 100 

}; 

monkeyPatcher.call(post, 'upvote'); 

monkeyPatcher.call(post, 'downvote'); 

let score = monkeyPatcher.call(post, 'score'); // [127, 127, 0, 'controversial'] 

monkeyPatcher.call(post, 'downvote');         // (executed 50 times) 

score = monkeyPatcher.call(post, 'score');     // [139, 189, -50, 'unpopular']
console.log(score);
