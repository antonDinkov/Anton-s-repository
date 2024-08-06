function towns(arr){

for (const iterator of arr) {
    let townArr = iterator.split(' | ');
    let cityObj = {
        town: townArr[0],
        latitude: Number(townArr[1]).toFixed(2),
        longitude: Number(townArr[2]).toFixed(2)
    }
    console.log(cityObj);
}

}
towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
//towns(['Plovdiv | 136.45 | 812.575']);