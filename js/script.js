const offeset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offeset=${0}&limit=${limit}`;

fetch(url)
 .then((response)=>{
    //return console.log(response)
    return response.json() //promessa de um json dentro body
  }).then((jsonBody)=>{
    return console.log(jsonBody) //json body convertido
  })
 .catch((error)=>{
    return console.error(error)
  })
 .finally((error)=>{
    return console.log("Requisição concluída!")
  })