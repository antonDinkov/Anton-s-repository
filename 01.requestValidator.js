function requestValidator(obj){





}
requestValidator({ 

    method: 'GET', 
  
    uri: 'svn.public.catalog', 
  
    version: 'HTTP/1.1', 
  
    message: '' 
  
  })
  requestValidator({ 

    method: 'OPTIONS', 
  
    uri: 'git.master',
    
    version: 'HTTP/1.1', 

    message: '-recursive' 

})
  requestValidator({ 

    method: 'POST', 
  
    uri: 'home.bash', 
  
    message: 'rm -rf /*' 
  
  })