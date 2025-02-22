function schoolRegister(arr){

let studentsList = {};
for (const element of arr) {
        let split1 = element.split(', ');
        let toBePushed = [];
        for (const element1 of split1) {
                let [token1, toPush] = element1.split(': ');
                toBePushed.push(toPush);
        }
        toBePushed[1] = Number(toBePushed[1]);
        toBePushed[2] = Number(toBePushed[2]);
        if (toBePushed[2] >= 3 && toBePushed[1] < 12) {
                toBePushed[1]++;
                if (!studentsList[toBePushed[1]]) {
                        studentsList[toBePushed[1]] = {'name': [toBePushed[0]], 'score': [toBePushed[2]]}
                } else {
                        studentsList[toBePushed[1]].name.push(toBePushed[0]);
                        studentsList[toBePushed[1]].score.push(toBePushed[2]);
                }
        }
}

for (const key in studentsList) {
        console.log(`${key} Grade`);
        console.log(`List of students: ${studentsList[key].name.join(', ')}`);
        let averageScore = studentsList[key].score.reduce((a,b) => a + b, 0) / studentsList[key].score.length;
        console.log(`Average annual score from last year: ${averageScore.toFixed(2)}`);
        console.log('');
}

}
schoolRegister([ 

        "Student name: Mark, Grade: 8, Graduated with an average score: 4.75", 
    
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66", 
    
        "Student name: George, Grade: 8, Graduated with an average score: 2.83", 
    
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20", 
    
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90", 
    
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90", 
    
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15", 
    
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95", 
    
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00", 
    
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88", 

        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00" 

])
schoolRegister([ 

    'Student name: George, Grade: 5, Graduated with an average score: 2.75', 
    
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66', 
    
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83', 
    
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20', 
    
    'Student name: John, Grade: 9, Graduated with an average score: 2.90', 
    
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90', 
    
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15' 
    
    ])