import { pokemonList } from "./retornando a lista de pokemons";

const pokeApi = {};

function

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json());
        .then((pokemon) => {

    })
};

pokeApi.getPokemons = (offset, limit) => {
  const offset = 0;
  const limit = 10;
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => promisse.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails);
};
