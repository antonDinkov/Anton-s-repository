function netherRealms(str){
//трябва да се изчисти от интервали както отпред така и зад думите. В Бот версията е по-добре видимо с методът trim
let arr = str.split((/\s*,\s*/));
arr.sort((a, b) => a.localeCompare(b));
arr.forEach(element => {
    let damage = element.match(/-?\d+(\.\d+)?/g);
    if (damage) {
        damage = damage.map(Number).reduce((a, b) => a + b, 0);
        let multiplicators = element.match(/[*\/]/g);
        if(multiplicators){
            multiplicators.forEach(multiplicator => {
                if (multiplicator === '*') {
                    damage *= 2;
                }else if (multiplicator === '/') {
                    damage /= 2;
                }
            });
        }
    }else {
        damage = 0;
    }
    let health = element.match(/[^0-9\+\-\*\/\.]/g).reduce((a, b) => a + b.charCodeAt(0), 0);
    console.log(`${element} - ${health} health, ${damage.toFixed(2)} damage`);
});

}
netherRealms('M3ph-0.5s-0.5t0.0**')
netherRealms('M3ph1st0**,Azazel')
netherRealms('Gos/ho')