function argumentInfo (...arg) {


const tally = {};
for (const element of arg) {
    const key = typeof(element);
    console.log(`${key}: ${element}`);
    if (!tally[key]) {
        tally[key] = 1;
    } else {
        tally[key]++;
    }
};
const ordered = Object.entries(tally).sort((a, b) => b[1] - a[1]);
for (const [type, count] of ordered) {
    console.log(`${type} = ${count}`);
}

}
argumentInfo('cat', 42, function () { console.log('Hello world!');})