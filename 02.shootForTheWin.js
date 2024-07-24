function shootForTheWin(arr){

let targets = arr.shift().split(' ').map(Number);
let command = arr.shift();
let counter = 0;
while(command !== 'End'){
    let idx = Number(command);
    if(targets[idx] !== -1 && (idx >= 0 && idx < targets.length)){
        counter++;
        let temporary = targets[idx];
        targets[idx] = -1;
        targets = targets.map(el => {
            if(el !== -1){
                if(el > temporary){
                    return el - temporary;
                }else{
                    return el + temporary;
                }
            }
            return el;
        });
    }
    command = arr.shift();
}
console.log(`Shot targets: ${counter} -> ${targets.join(' ')}`);

}
shootForTheWin(['24 50 36 70', '0', '4', '3', '1', 'End']);
shootForTheWin(['30 30 12 60 54 66', '5', '2', '4', '0', 'End']);