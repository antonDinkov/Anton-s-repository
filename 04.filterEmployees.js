function filterEmployee(employee, criteria){

let arr = JSON.parse(employee);
let [key, value] = criteria.split('-');
if (value === 'All') {
    arr.forEach((obj, i) => {
        console.log(`${i}. ${obj.first_name} ${obj.last_name} - ${obj.email}`);
    });
}else {
    let filtered = arr.filter(obj => obj[key] === value);
    filtered.forEach((obj, i) => {
        console.log(`${i}. ${obj.first_name} ${obj.last_name} - ${obj.email}`);
    });

}
}

/* function filter (param1, param2) {
    return function (obj) {
        return obj[param1] === param2;
} */

/* function filter () {
    return function (obj) {
        return obj[this.param1] === obj[this.param2];
}.bind(this);
} */
filterEmployee(`[{ 

    "id": "1", 

    "first_name": "Kaylee", 

    "last_name": "Johnson", 

    "email": "k0@cnn.com", 

    "gender": "Female" 

  }, { 

    "id": "2", 

    "first_name": "Kizzee", 

    "last_name": "Johnson", 

    "email": "kjost1@forbes.com", 

    "gender": "Female"
    }, { 

    "id": "3", 

    "first_name": "Evanne", 

    "last_name": "Maldin", 

    "email": "emaldin2@hostgator.com", 

    "gender": "Male" 

  }, { 

    "id": "4", 

    "first_name": "Evanne", 

    "last_name": "Johnson", 

    "email": "ev2@hostgator.com", 

    "gender": "Male" 

  }]`, 

 'last_name-Johnson')