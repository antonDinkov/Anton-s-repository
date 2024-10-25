function sameNumbers(num){

let str = String(num);
let flagman = true;
let sum = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] != str[i+1] && str[i + 1]) {
        flagman = false;
    }
    let num = Number(str[i]);
    sum += num;
}
console.log(flagman);
console.log(sum);

}
sameNumbers(2222222)
sameNumbers(1234)