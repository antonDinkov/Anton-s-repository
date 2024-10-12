function furniture(arr){

let regex = />>(?<product>[A-Z][A-Za-z]+)<<(?<price>\d+.\d*)!(?<quantity>\d+)/;
let totalPrice = 0;
console.log('Bought furniture:');
for (const iterator of arr) {
    let currProduct = iterator.match(regex);
    if(currProduct){
        console.log(currProduct.groups.product);
        totalPrice += (Number(currProduct.groups.price) * Number(currProduct.groups.quantity));
    }
}
console.log(`Total money spend: ${totalPrice.toFixed(2)}`);

}
furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])
//furniture(['>>Laptop<<312.2323!3', '>>TV<<300.21314!5', '>Invalid<<!5', '>>TV<<300.21314!20', '>>Invalid<!5', '>>TV<<30.21314!5', '>>Invalid<<!!5', 'Purchase'])
//furniture(['>Invalid<<!4', '>Invalid<<!2', '>Invalid<<!5', 'Purchase'])