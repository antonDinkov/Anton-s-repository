function pascalCaseSplitter(str){

let str1 = '';
for (let i = 0; i < str.length; i++) {
    if(str[i] === str[i].toUpperCase() && i !== 0){
        str1 += `, ${str[i]}`;
    }else{
        str1 += str[i];
    }
}
console.log(str1);

}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
pascalCaseSplitter('HoldTheDoor')
pascalCaseSplitter('ThisIsSoAnnoyingToDo')