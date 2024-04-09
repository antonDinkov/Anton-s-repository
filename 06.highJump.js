function highJump(input){

    let target = Number(input[0]);
    let i = 1;
    let jump = Number(input[i]);
    let jumpCounter = 0;
    let temporaryTarget = target-30;
    
    while(temporaryTarget<=target){
        let foutCounter = 0;
        while(jump<=temporaryTarget){
            foutCounter++;
            if(foutCounter === 3){
                jumpCounter++;
                console.log(`Tihomir failed at ${temporaryTarget}cm after ${jumpCounter} jumps.`);return;
            }else{
                i++;
                jump = Number(input[i]);
                jumpCounter++;
            }
        }
        jumpCounter++;
        i++;
        jump = Number(input[i]);
        temporaryTarget += 5;
    }
    
    console.log(`Tihomir succeeded, he jumped over ${target}cm after ${jumpCounter} jumps.`);
    
}
highJump(["231","205","212","213","228","229","230","235"])
//highJump(["250","225","224","225","228","231","235","234","235"])