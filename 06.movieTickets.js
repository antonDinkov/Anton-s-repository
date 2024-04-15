function movieTickets(input){

let a1 = Number(input[0]);
let a2 = Number(input[1]);
let n = Number(input[2]);
let ticket = '';

for(let i = a1;i<a2;i++){
    let symbol1 = String.fromCharCode(i);
    for(let j = 1;j<n;j++){
        let symbol2 = j;
        for(let k = 1;k<=((n/2)-1);k++){
            let symbol3 = k;
            let symbol4 = i;
            ticket = `${symbol1}-${symbol2}${symbol3}${symbol4}`
            if(i%2!==0&&(symbol2+symbol3+symbol4)%2!==0){
                console.log(ticket);
            }
        }
    }
    
}

}
movieTickets(["71","74","6"])