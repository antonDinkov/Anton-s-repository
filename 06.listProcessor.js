function listProcessor(arr){

let outputArr = [];
const innerObj  = {
    add: (str) => outputArr.push(str),
    remove: (str) => {
        outputArr = outputArr.filter(el => el !== str);
    },
    print: () => console.log(outputArr.join(','))
}
for (const element of arr) {
    const [command, token] = element.split(' ');
    innerObj[command](token);
}

}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])