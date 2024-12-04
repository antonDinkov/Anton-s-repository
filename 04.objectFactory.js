function factory(library, orders){

let output = [];
for (const element of orders) {
    let toPush = {};
    let {template, parts} = element;
    toPush.name = template.name;
    for (const el of parts) {
        toPush[el] = library[el];
    }
    output.push(toPush);
}
return output;

}

const library = { 

    print: function () { 
  
      console.log(`${this.name} is printing a page`); 
  
    }, 
  
    scan: function () { 
  
      console.log(`${this.name} is scanning a document`); 
  
    }, 
  
    play: function (artist, track) { 
  
      console.log(`${this.name} is playing '${track}' by ${artist}`); 
  
    }, 
  
  }; 
  
  const orders = [ 
  
    { 
  
      template: { name: 'ACME Printer'}, 
  
      parts: ['print']       
  
    }, 
    { 

        template: { name: 'Initech Scanner'}, 
    
        parts: ['scan']       
    
      }, 
    
      { 
    
        template: { name: 'ComTron Copier'}, 
    
        parts: ['scan', 'print']       
    
      }, 
    
      { 
    
        template: { name: 'BoomBox Stereo'}, 
    
        parts: ['play']       
    
      } 
    
    ]; 
    
    const products = factory(library, orders);
    
    console.log(products);
