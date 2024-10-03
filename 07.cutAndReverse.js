function cutAndReverse(str){

let firstHalf = str.substring(0, str.length/2);
let secondHalf = str.substring(str.length/2);
console.log(reverse(firstHalf));
console.log(reverse(secondHalf));

function reverse(element){
    return element = element.split('').reverse().join('');
}
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
//cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')