function favoriteMovie(input){

let i = 0;
let movie = input[i];
let limit = 7;
let winnerPoint = 0;
let winner;
let movieCounter = 0;

while(movie!=='STOP'){
    let counter = 0;
    for(let j = 0;j<movie.length;j++){
        let ascii = movie.charCodeAt(j);
        counter += ascii;
        if(ascii>=97&&ascii<=122){
            counter -= 2*movie.length;
        }else if(ascii>=65&&ascii<=90){
            counter -= movie.length;
        }
        if(counter>winnerPoint){
            winnerPoint = counter;
            winner = movie;
        }
    }
    movieCounter++;
    if(movieCounter===limit){
        console.log('The limit is reached.');
        break;
    }
    i++;
    movie = input[i];
}

console.log(`The best movie for you is ${winner} with ${winnerPoint} ASCII sum.`);

}
favoriteMovie(["Wrong turn","The maze","Area 51","Night Club","Ice age","Harry Potter","Wizards"])