function nonDecreasingSubset(arr){

let subset = [arr[0]];
for (let i = 1; i < arr.length; i++) {
    let currNum = arr[i];
    let lastPush = subset[subset.length - 1];
    if (currNum >= lastPush){
        subset.push(currNum);
    }
}
console.log(subset.join(' '));
}
nonDecreasingSubset([1,3,8,4,10,12,3,2,24]);
nonDecreasingSubset([1,2,3,4]);
nonDecreasingSubset([20,3,2,15,6,1]);