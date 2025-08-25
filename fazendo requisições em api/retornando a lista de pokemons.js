function convertPokemonTypesToLi(pokemonTypes){
    return pokemonTypes.mao((typeSlot) => `<li class="type>"${typeSlot.type.name}</li>`)
}

export function convvertPokemonToLi(pokemon) {
  return `
        <li class="pokemon">
            <span class="number">#${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${convertPokemonTypesToLi(pokemon.types).join('')}
                <ol/>              
                <img src="${pokemon.sprites.other.dream_world.front_default}"
                    alt="${pokemon.name}">
            </div>        
        </li>
    `;
}

export const pokemonList = document.getElementsById("pokemonList");

pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convvertPokemonToLi).join('')
    pokemonList.innerHTML= newHtml
})

