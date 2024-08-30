function addressBook(arr){

const addresses = {};
for (const iterator of arr) {
    const [name, address] = iterator.split(':');
    addresses[name] = address;
}

let toBeSorted = Object.entries(addresses).sort(([key1, value1], [key2, value2]) => key1.localeCompare(key2));
for (const [name, address] of toBeSorted) {
    console.log(`${name} -> ${address}`);
}
}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])