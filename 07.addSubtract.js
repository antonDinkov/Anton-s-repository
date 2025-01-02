function createCalculator() { 
    let value = 0; 
    return { 
        add: function(num) { value += Number(num); }, 
        subtract: function(num) { value -= Number(num); }, 
        get: function() { return value; } 
    } 
} 
let output = createCalculator();
output.add('a');
console.log(output.get());


export {
    createCalculator
}