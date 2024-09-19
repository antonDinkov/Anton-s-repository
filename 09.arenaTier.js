function arenaTier(arr){

let gladiatorsPool = {};
let command = arr.shift()
while(command !== 'Ave Cesar'){
    if(!command.includes('vs')){
        let [gladiator, technique, skill] = command.split(' -> ');
        skill = Number(skill);
        if(!gladiatorsPool[gladiator]){
            gladiatorsPool[gladiator] = {[technique]: skill};
        }else{
            if(!gladiatorsPool[gladiator][technique]){
                gladiatorsPool[gladiator][technique] = skill;
            }else{
                let oldSkillValue = gladiatorsPool[gladiator][technique];
                if (oldSkillValue < skill){
                gladiatorsPool[gladiator] = {[technique]: skill};
                }
            }
        }
    }else{
        let [gladiator1, gladiator2] = command.split(' vs ');
        if(gladiator1 in gladiatorsPool && gladiator2 in gladiatorsPool){
            let gladiator1ArrKeys = Object.keys(gladiatorsPool[gladiator1]);
            for (const key of gladiator1ArrKeys) {
                if (key in gladiatorsPool[gladiator2]){
                    let gladiator1ArrValues = Object.values(gladiatorsPool[gladiator1]);
                    let gladiator2ArrValues = Object.values(gladiatorsPool[gladiator2]);
                    let sum1 = sumEl(gladiator1ArrValues);
                    let sum2 = sumEl(gladiator2ArrValues);
                    if(sum1 > sum2){
                        delete gladiatorsPool[gladiator2];
                    }else if(sum2 > sum1){
                        delete gladiatorsPool[gladiator1];
                    }
                    break;
                }
            }
        }
    }
    command = arr.shift();
}

let gladiatorsPoolArr = Object.entries(gladiatorsPool).sort(([a0,a], [b0,b]) => {
    let outputSum1 = sumEl(Object.values(a));
    let outputSum2 = sumEl(Object.values(b));
    return outputSum2 - outputSum1 || a0.localeCompare(b0);
});

for (const [gladiator, techniques] of gladiatorsPoolArr) {
    let totalSkills = sumEl(Object.values(techniques))
    console.log(`${gladiator}: ${totalSkills} skill`);
    let techniquesArr = Object.entries(techniques).sort(([a0,a], [b0,b]) => b - a || a0.localeCompare(b0));
    for (const [currTech, currskill] of techniquesArr) {
        console.log(`- ${currTech} <!> ${currskill}`);
    }
}



function sumEl(elArr){
    let sum = 0;
    for (const iterator of elArr) {
        sum += iterator;
    }
    return sum;
}
}
arenaTier(['Peter -> BattleCry -> 400', 'Alex -> PowerPunch -> 300', 'Stefan -> Duck -> 200', 'Stefan -> Tiger -> 250', 'Ave Cesar']);
arenaTier(['Peter -> Duck -> 400', 'Julius -> Shield -> 150', 'Gladius -> Heal -> 200', 'Gladius -> Support -> 250', 'Gladius -> Shield -> 250', 'Peter vs Gladius', 'Gladius vs Julius', 'Gladius vs Maximilian', 'Ave Cesar']);