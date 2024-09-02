function schoolGrades(arr){

const grade = new Map();
for (const iterator of arr) {
    let tokens = iterator.split(' ');
    let name = tokens.shift();
    let grades = tokens.map(Number);
    
    if(!grade.has(name)){
        grade.set(name, grades);
    }else{
        let gradesArr = grade.get(name);
        for (const iterator of grades) {
            gradesArr.push(iterator);
        }
        grade.set(name, gradesArr)
    }
}

let arrGrade = Array.from(grade).sort(([names1, resultat1], [names2, resultat2])=>names1.localeCompare(names2));

for (const [name, results] of arrGrade) {
    let sum = 0
    for (const currResult of results) {
        sum += currResult;
    }
    averageResult = sum/results.length;
    console.log(`${name}: ${averageResult.toFixed(2)}`);
}

}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])