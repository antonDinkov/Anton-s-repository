function heroesofCodeandLogicVII(arr){

let heroesCount = arr.shift();
let heroesArr = arr.splice(0, heroesCount);
let heroes = {};
for (const iterator of heroesArr) {
    let [hero, hp, mp] = iterator.split(' ');
    heroes[hero] = {'HP': Number(hp), 'MP': Number(mp)};
}

let stop = arr.shift();
while (stop !== 'End') {
    let [command, hero, token1, token2] = stop.split(' - ');
    if (command === 'CastSpell') {
        let mpNeeded = Number(token1);
        let spellName = token2
        if (heroes[hero].MP >= mpNeeded) {
            heroes[hero].MP -= mpNeeded;
            console.log(`${hero} has successfully cast ${spellName} and now has ${heroes[hero].MP} MP!`);
        } else {
            console.log(`${hero} does not have enough MP to cast ${spellName}!`);
        }
    } else if (command === 'TakeDamage') {
        let demage = Number(token1);
        let attacker = token2;
        heroes[hero].HP -= demage;
        if (heroes[hero].HP > 0) {
            console.log(`${hero} was hit for ${demage} HP by ${attacker} and now has ${heroes[hero].HP} HP left!`);
        }else{
            console.log(`${hero} has been killed by ${attacker}!`);
            delete heroes[hero];
        }
    } else if (command === 'Recharge') {
        let recharge = Number(token1);
        let currMp = heroes[hero].MP;
        heroes[hero].MP += recharge;
        if (heroes[hero].MP > 200) {
            heroes[hero].MP = 200;
            recharge = 200 - currMp;
        }
        console.log(`${hero} recharged for ${recharge} MP!`);
    } else if (command === 'Heal') {
        let amount = Number(token1);
        let currHp = heroes[hero].HP;
        heroes[hero].HP += amount;
        if (heroes[hero].HP > 100) {
            heroes[hero].HP = 100;
            amount = 100 - currHp;
        }
        console.log(`${hero} healed for ${amount} HP!`);
    }
    stop = arr.shift()
}
let entries = Object.entries(heroes)
for (const [hero, {HP, MP}] of entries) {
    console.log(hero);
    console.log(`  HP: ${HP}`);
    console.log(`  MP: ${MP}`);
}

}
heroesofCodeandLogicVII(["2", "Solmyr 85 120", "Kyrre 99 50", "Heal - Solmyr - 10", "Recharge - Solmyr - 50", "TakeDamage - Kyrre - 66 - Orc", "CastSpell - Kyrre - 15 - ViewEarth", "End"])
//heroesofCodeandLogicVII(["4", "Adela 90 150", "SirMullich 70 40", "Ivor 1  111", "Tyris 94 61", "Heal - SirMullich - 50", "Recharge - Adela - 100", "CastSpell - Tyris - 1000 - Fireball", "TakeDamage - Tyris - 99 - Fireball", "TakeDamage - Ivor - 3 - Mosquito", "End"])