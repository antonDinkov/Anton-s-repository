function areaAndVolumeCalculator(araaFunc, volume, str){

const arr = JSON.parse(str);
const outputArr = []
for (const element of arr) {
    let obj = {};
    obj.area = araaFunc.call(element);
    obj.volume = volume.call(element);
    outputArr.push(obj);
}
return outputArr;

}
areaAndVolumeCalculator(area, vol, `[ 

{"x":"1","y":"2","z":"10"}, 

{"x":"7","y":"7","z":"10"}, 

{"x":"5","y":"2","z":"10"} 

]`)

function area() { 

return Math.abs(this.x * this.y); 
    
}; 

function vol() { 

return Math.abs(this.x * this.y * this.z); 
        
};