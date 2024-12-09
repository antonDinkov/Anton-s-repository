function add(num){

return function inner(num2) {
    return num + num2;
}

}
//Начинът на извикване
console.log(add(5)(4));
