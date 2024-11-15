function listOfNames(arr){

arr.sort((a, b) => a.localeCompare(b));
let num = 1;
for (const element of arr) {
    console.log(`${num}.${element}`);
    num++;
}

}
listOfNames(["John", "Bob", "Christina", "Ema"])
