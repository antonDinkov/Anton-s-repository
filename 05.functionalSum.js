function functionalSum(num){
let sum = 0;
return function functionalSum () {
    
    return sum += num
}


}
functionalSum(1)
functionalSum(1)(6)(-3)