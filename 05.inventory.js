function inventory(arr){

let heroesArr = [];
for (const iterator of arr) {
    const tokens = iterator.split(' / ');
    let [name, level, items] = tokens;
    level = Number(level);
    const obj = {
        Hero: name,
        level,
        Items: items
    }
    heroesArr.push(obj);
}

heroesArr.sort((a,b) => a.level - b.level); //Извиквам конкретният ключ по койт трябва да се сортират

for (const iterator of heroesArr) {
    console.log(`Hero: ${iterator.Hero}`);
    console.log(`level => ${iterator.level}`);
    console.log(`items => ${iterator.Items}`);
}

}
inventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);
/* inventory(['Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara']); */