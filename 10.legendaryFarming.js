function legendaryFarming(str){

const legendaryItem = {shards: 'Shadowmourne', fragments: 'Valanyr', motes: 'Dragonwrath'};
const materials = {shards: 0, fragments: 0, motes: 0};
const junkMaterials = {};
let arr = str.split(' ');
for(let i = 0; i < arr.length; i += 2){
    let quantity = Number(arr[i]);
    let material = arr[i+1].toLowerCase();
    if(material in materials){
        materials[material] += quantity;
        if(materials[material] >= 250){
            materials[material] -= 250;
            console.log(`${legendaryItem[material]} obtained!`);
            break;
        }
    }else if(material in junkMaterials){
        junkMaterials[material] += quantity;
    }else{
        junkMaterials[material] = quantity;
    }
    
}
const materialsArr = Object.entries(materials);
materialsArr.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
for (const [currMaterial, currQuantity] of materialsArr) {
    console.log(`${currMaterial}: ${currQuantity}`);
}
const junkMaterialsArr = Object.entries(junkMaterials);
junkMaterialsArr.sort((a, b) => a[0].localeCompare(b[0]));
for (const [currJunkMaterial, currJunkQuantity] of junkMaterialsArr) {
    console.log(`${currJunkMaterial}: ${currJunkQuantity}`);
}

}
//legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');