function extractFile(str){

const arr = str.split('\\').pop().split('.');
const extension = arr.pop();
const filename = arr.join('.');
console.log(`File name: ${filename}\nFile extension: ${extension}`);

}
extractFile('C:\\Internal\\training-internal\\Template.agafat.pptx');
//extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')