function passwordGenerator(arr){

let [str1, str2, iterable] = arr;
let str = (str1 + str2).split('');
let pattern = ['a', 'o', 'u', 'e', 'i'];
let counter = 0;

for(let i = 0; i < str.length; i++){
    if (pattern.includes(str[i])){
        str[i] = iterable[counter].toUpperCase();
        counter++;
    }
    if (counter === iterable.length){
        counter = 0;
    }
}
console.log(`Your generated password is ${str.reverse().join('')}`);

}
passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange'])
//passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute'])
//passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'])