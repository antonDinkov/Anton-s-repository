function modernTimes(str){
let pattern = /\b[A-Za-z]+\b/;
filteredArr = str.split(' ').filter(el => el.startsWith('#') && el.length > 1);

for (const iterator of filteredArr) {
    let output = iterator.substring(1); //Когато няма втори параметър ми връща всичко от посочения индекс до края
    if(pattern.test(output)){           // iterator.slice(1) е същото!
        console.log(output);
    }
}

}
//modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimes('The symbol # is known #varously in English-speaking #regions as the #number sign')