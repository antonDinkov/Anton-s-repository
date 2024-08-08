function movies(arr){

let moviesArr = [];
for(el of arr){
    
    if (el.includes('addMovie')) {
        const currMovie = el.split('addMovie ')[1];
        const movie = {}
        movie.name = currMovie;
        moviesArr.push(movie);
    }
    if(el.includes('directedBy')){
        const directedArr = el.split(' directedBy ');
        const currMovie = directedArr[0];
        const directeur = directedArr[1];
        let flagman = moviesArr.find(el => el.name === currMovie);//Flagman ще е името на обекта отговарящ на условието.
        if(flagman){
            flagman.director = directeur;
        }
    }
    if(el.includes('onDate')){
        const dateArr = el.split(' onDate ');
        const currMovie = dateArr[0];
        const dateOn = dateArr[1];
        let flagman = moviesArr.find(el => el.name === currMovie);
        if(flagman){
            flagman.date = dateOn;
        }
    }
}

for (const iterator of moviesArr) {
    if (iterator.director && iterator.date) {
        console.log(JSON.stringify(iterator));
    }
}

}
movies(['addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']);

/* movies(['addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo']); */