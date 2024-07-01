function lastKNumbersSequance(n, k){

const arr = [1];
for (let i = 1; i < n; i++) {
    let nextEl = 0;
    let lastK = arr.slice(-k);     //.slice ako 'к' > броя на ел в масива, ще върне броят на ел в масива!
    for(el of lastK) {
        nextEl += el;
    }
    arr.push(nextEl);
}
console.log(arr.join(' '));

}
lastKNumbersSequance(6, 3);