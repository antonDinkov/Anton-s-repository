function fancyBarcodes(arr){

let n = arr.shift();
let regex = /@#+[A-Z][A-Za-z\d]{4,}[A-Z]@#+/
let regex1 = /\d/g;
for (const iterator of arr) {
    let match = regex.test(iterator);
    if (match) {
        let digits = iterator.match(regex1);
        if (digits) {
            digits = digits.join('');
        }else{
            digits = '00';
        }
        console.log(`Product group: ${digits}`);
    }else{
        console.log('Invalid barcode');
    }
}

}
fancyBarcodes(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
fancyBarcodes(["6", "@###Val1d1teM@###", "@#ValidIteM@#", "##InvaliDiteM##", "@InvalidIteM@", "@#Invalid_IteM@#", "@#ValiditeM@#"]);