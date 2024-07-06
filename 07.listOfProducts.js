function listOfProducts(arr){

arr.sort();
let list = arr.map(x => {
   return (arr.indexOf(x) + 1)+'.'+x;
});
console.log(list.join('\n'));

}
listOfProducts(['Potatos','Tomatoes','Onions','Apples']);