function cityTaxes(name, population, treasury){

    let obj = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes,
        applyGrowth,
        applyRecession
    };

function collectTaxes () {
    this.treasury = Math.floor(this.treasury + this.population * this.taxRate);
}

function applyGrowth (percentage) {
    this.population = Math.floor(this.population * (percentage/100) + this.population);
}

function applyRecession (percentage) {
    this.treasury = Math.floor(this.treasury - this.treasury * (percentage/100));
}

return obj;

}
cityTaxes(const city =  

    cityTaxes('Tortuga', 
  
    7000, 
  
    15000); 
  
  console.log(city);)
cityTaxes(const city = 

    cityTaxes('Tortuga', 
  
    7000, 
  
    15000); 
  
  city.collectTaxes(); 
  
  console.log(city.treasury); 
  
  city.applyGrowth(5); 
  
  console.log(city.population);)