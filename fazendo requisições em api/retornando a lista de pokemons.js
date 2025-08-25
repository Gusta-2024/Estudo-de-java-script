const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

export function convvertPokemonToLi(pokemon) {
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

export const pokemonList = document.getElementsById("pokemonList");


