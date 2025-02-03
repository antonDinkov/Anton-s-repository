function serializeString(arr){

let str = arr.shift();
let char = [];
let idxs = [];

for (const element of str) {
    if (!char.includes(element)) {
        char.push(element);
        let currCharIdxs = [];
        for (let i = 0; i < str.length; i++) {
            const el = str[i];
            if (el === element) {
                currCharIdxs.push(i);
            }
        }
        idxs.push(currCharIdxs);
        }
    }

for (let i = 0; i < char.length; i++) {
    const element = char[i];
    const el = idxs[i];
    console.log(`${element}:${el.join('/')}`);
    }
}

serializeString(["abababa"])
/* serializeString(["avjavamsdmcalsdm"]) */