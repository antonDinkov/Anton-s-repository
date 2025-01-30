function matchFullName(str){

let regex = /\b[A-Z][a-z]+\b \b[A-Z][a-z]+\b/g;
let matches = str.match(regex);
matches = matches.join(' ');
console.log(matches);

}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")