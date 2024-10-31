function cookingByNumbers(num, ...operations) {
num = Number(num);
for (const element of operations) {
    if (element === 'chop') {
        num /= 2;
        console.log(num);
    } else if (element === 'dice') {
        num = Math.sqrt(num);
        console.log(num);
    } else if (element === 'spice') {
        num += 1;
        console.log(num);
    } else if (element === 'bake') {
        num *= 3;
        console.log(num);
    } else if (element === 'fillet') {
        num *= 0.8;
        console.log(num);
    }
}

}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')