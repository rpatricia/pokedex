


function convertPokemonToLi(pokemon) {
  return `
  <li class="pokemon">
    <span class="number">#001</span>
    <span class="name"> ${pokemon.name}</span>
    <div class="detail">
      <ol class="types">
        <li class="type">grass</li>
        <li class="type">poison</li>
      </ol>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg " alt=${pokemon.name}>
    </div>
  </li>
  `;
}

const pokemonList = document.getElementById("pokemonList");

pokeApi.getPokemons().then((pokemons = []) => {
  const newHTML = pokemons.map(convertPokemonToLi).join('')
  pokemonList.innerHTML += newHTML
})

  
// maneira fazendo o mesmo procedimento usando for:

// pokeApi.getPokemons().then((pokemons) => {
//     const listItems = []
//     for (let i = 0; i < pokemons.length; i++) {
//       const pokemon = pokemons[i]; 
//       listItems.push(convertPokemonToLi(pokemon))
      
//   }
//   console.log(listItems)
//   })
//   .catch((error) => console.error(error));


/* 
Outra forma com 37 linhas
const getJson = async () => {
  try {
    let offset = 0;
    let limit = 10;
    let url = https://pokeapi.co/api/v2/pokemon?offeset=${offset}&limit=${limit};
    let response = await fetch(url);
    let json = await response.json();
    let results = await json.results;
    let list = renderList(results);
    let content = document.getElementById("pokemonList");
    content.innerHTML = list;
  } catch (error) {
    console.log(Error: ${error.message});
  }
};
getJson();
const renderList = (lists) => {
  let rows = lists.map(({ name }) => {
    return `
  <li class="pokemon">
    <span class="number">#001</span>
    <span class="name"> ${name}</span>
    <div class="detail">
      <ol class="types">
        <li class="type">grass</li>
        <li class="type">poison</li>
      </ol>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg " alt=${name}>
    </div>
  </li>
  `;
  });
  return rows.join("");
};
*/

