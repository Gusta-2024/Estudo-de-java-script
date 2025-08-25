const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convvertPokemonToLi(pokemon) {
  //forma de exibir a lista de pokemons no html sem poluir o html
  return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    <li class="type">
                    <li class="type">
                <ol/>
                
                <img src="https://raw.girhubusercontent.com/PokeApi/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    alt="${pokemon.name}">
            </div>        
        </li>
    `;
}

const pokemonList = document.getElementsById("pokemonList");

fetch(url) //Essa é uma forma de fazer um encadeamento de thens uma forma de escrever muito codigo em poucas linhas
  .then((response) => response.json())
  .then((jsonBody) => jsonBody.results)
  .then((pokemons) => {
    for (let i = 0; i < pokemons.length; i++) {
        const pokemons = pokemons[i];
        pokemonList.innerHTML += convvertPokemonToLi(pokemon);
        //Essa e a forma mais sesmantica de requisitar os pokemons em lista definindo um id na lista ol na section pokemons no HTML.
    }
  })
  .catch((erro) => console.error(error));
