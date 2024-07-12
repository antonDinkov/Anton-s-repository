function sorting(arr){

arr.sort((a,b)=>a-b);
let newArr = [];
while(arr.length > 0){
    if(arr.length === 1){
        newArr.push(arr[0]);
        break;
    }
    let front = arr.pop();
    let back = arr.shift();
    newArr.push(front, back);
}
console.log(newArr.join(' '));

}
sorting([1,21,3,52,69,63,31,2,18,94,98]);