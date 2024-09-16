function companyUsers(arr){

const companyEmployee = new Map();
for (const iterator of arr) {
    const [company, employeeId] = iterator.split(' -> ');
    if(!companyEmployee.has(company)){
        companyEmployee.set(company, new Set());
    }
    companyEmployee.get(company).add(employeeId);
}
let companyEmployeeArr = Array.from(companyEmployee).sort(([a1, b1], [a2, b2]) => a1.localeCompare(a2));
for (const [firma, idSet] of companyEmployeeArr) {
    console.log(firma);
    for (const iterator of idSet) {
        console.log(`-- ${iterator}`);
    }
}

}
companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345']);
//companyUsers(['SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111']);