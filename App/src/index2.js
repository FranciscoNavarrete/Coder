//Promise + Fetch
//obj que adentro tiene prop, que esa prop 
//triggers(eventos)async - timers(contadores)-request(pedidos)


//CLIENTE

//metodo(verbo) - URL - version
//headers
//body

//SERVIDOR
//version - status - mensaje
//headers
//body

//METODOS: representa la intencion del cliente(GET, POST,PUT, PATCH,DELETE  )
//URL: 

//FETCH: API WEB(AJAX)
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => console.log(json))