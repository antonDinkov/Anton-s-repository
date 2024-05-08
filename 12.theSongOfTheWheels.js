function theSongOfTheWheels(input){

let m = Number(input[0]);
let exitPrint = '';
let counter = 4;
let password = 'No !';
let flagman = false;

for(let i = 1;i <= 9;i++){
    for(let j = 1;j <= 9;j++){
        for(let k = 1;k <= 9;k++){
            for(let l = 1;l <= 9;l++){
                if((i<j&&k>l) && (i*j + k*l === m)){
                    exitPrint += `${i}${j}${k}${l} `;
                    counter--;
                    flagman = true;
                    if(counter === 0){
                        password = `${i}${j}${k}${l}`
                    }
                }
            }
        }
    }
}

if(flagman){
    console.log(exitPrint);
    if(counter <= 0){
        console.log(`Password: ${password}`);
    }else{
        console.log('No!');
    }
}else{
    console.log('No!');
}

}
theSongOfTheWheels(['11'])