function replaceRepeatingChars(str){
let str1 = ''
for(let i = 0;i < str.length; i++){
    if(str[i] === str[i-1]){
        continue;
    }else{
        str1 += str[i];
    }
}
console.log(str1);

}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
//replaceRepeatingChars('qqqwerqwecccwd');