function breakfastRobot () {

    const recipe = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    }

    const starage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    return function instructions(str) {
        let arr = str.split(' ');
        let command = arr.shift();
        let product = arr.shift();
        let quantity = Number(arr.shift());
        if (command === 'restock') {
            starage[product] += quantity;
            return 'Success'
        } else if (command === 'prepare') {
            let orderProtein = quantity*recipe[product].protein;
            if (orderProtein > starage.protein) {
                return `Error: not enough protein in stock`;
            }
            let orderCarbs = quantity*recipe[product].carbohydrate;
            if (orderCarbs > starage.carbohydrate) {
                return `Error: not enough carbohydrate in stock`;
            }
            let orderFat = quantity*recipe[product].fat;
            if (orderFat > starage.fat) {
                return `Error: not enough fat in stock`;
            }
            let orderFlavour = quantity*recipe[product].flavour;
            if (orderFlavour > starage.flavour) {
                return `Error: not enough flavour in stock`;
            }
            for (const key in recipe[product]) {
                starage[key] -= (recipe[product][key]*quantity);
            }
            return 'Success';
            
        } else if (command === 'report') {
            const output = [];
            for (const key in starage) {
                output.push(`${key}=${starage[key]}`);
            }
            return output.join(' ');
        }
    }
}

let menager = breakfastRobot();
console.log(menager('prepare lemonade 4'));

/* restock flavour 50  

    prepare lemonade 4  
    
    restock carbohydrate 10 
    
    restock flavour 10 
    
    prepare apple 1 
    
    restock fat 10 
    
    prepare burger 1 
    
    report */