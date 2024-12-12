function commandProcessor(){
let str = '';
return {
    append,
    removeStart,
    removeEnd,
    print
}

function append(string){
    str += string;
}
function removeStart(num){
    str = str.slice(num);
}
function removeEnd(num){
    str = str.slice(0, -num);
}
function print(){
    console.log(str);
}
}
let firstZeroTest = commandProcessor(); 

firstZeroTest.append('hello'); 

firstZeroTest.append('again'); 

/* firstZeroTest.removeStart(3); 

firstZeroTest.removeEnd(4);  */

/* firstZeroTest.print(); */