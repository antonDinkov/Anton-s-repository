function challengeTheWedding(input){

let men = Number(input[0]);
let women = Number(input[1]);
let limit = Number(input[2]);
let counter = 0;
let exit = '';

for(let i = 1;i <= men;i++){
    for(let j = 1;j <= women;j++){
        if(counter!==limit){
            let currentMeeting = `(${i} <-> ${j}) `
            exit += currentMeeting;
            counter++;
        }else{
            break;
        }
    }
    if(counter === limit){
        break;
    }
}

console.log(exit);

}
challengeTheWedding(['2','2','3'])