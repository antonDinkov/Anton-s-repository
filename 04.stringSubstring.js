function stringSubstring(word, text){

text = text.toLowerCase().split(' '); //Ако не сплитна ще проверява за поредица от знаци, които могат да са част от друга дума

if(text.includes(word)){ //така проверявам целият елемент(от масив) дали отговаря на думата и избягвам това тя да е част от елемента и да ми върне true.
    console.log(word);
}else{
    console.log(`${word} not found!`);
}

}
stringSubstring('drashki', 'Bla bla nadrashki')
stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');