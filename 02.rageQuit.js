function rageQuit(str){
let regex = /(?<string>[^0-9]+)(?<count>[0-9]+)/g;
let tester = /[A-Za-z]/
let match = regex.exec(str);
let uniqueEl = [];
let rageQuit = '';
while (match) {
    let matchStr = match[1];
    for (let element of matchStr) {
        let elementUppr = element;
        if (tester.test(element)) {
            elementUppr = element.toUpperCase()
        }
        if (elementUppr != ' ' && !uniqueEl.includes(elementUppr)) {
            uniqueEl.push(elementUppr);
        }
    }
    let repeat = Number(match[2]);
    for (let i = 0; i < match[1].length; i++) {
        let element = match[1][i];
        
    }
    rageQuit += matchStr.toUpperCase().repeat(repeat);

    match = regex.exec(str);
}
console.log(`Unique symbols used: ${uniqueEl.length}`);
console.log(rageQuit);
}
//rageQuit('a3')
//rageQuit('aSd2&5s@1')
rageQuit('e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\\Iz.17*W:\\mwV`z-15g@hUYE{_$~}+X%*nytkW15')