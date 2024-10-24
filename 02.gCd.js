function gCd(num1, num2){

let smaller = function smallerOne(a, b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}
let divisors = [];
for (let divisor = 1; divisor <= smaller(num1, num2); divisor++) {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
        divisors.push(divisor);
    }
}
let gcd = divisors.pop();
console.log(gcd);

}
gCd(15, 5)
gCd(2154, 458)