function addAndRemove(arr){

let output = [];
let num = 1;
for(let i = 0;i < arr.length;i++){
    switch(arr[i]){
        case 'add':output.push(num);break;
            case 'remove':output.pop();break;
    }
    num++;
}
if(output.length == 0){
    console.log('Empty');
}else{
    console.log(output.join(' '));
}

}
addAndRemove(['add','add','add','add']);
addAndRemove(['add','add','remove','add','add']);
addAndRemove(['remove','remove','remove']);