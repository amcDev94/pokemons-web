import { SERVICES_URLS } from '../utils/constants'

export const getAllPokemons = () => fetch(`${SERVICES_URLS.baseUrl}${SERVICES_URLS.allPokemons}`)

export const getPokemonDetails = (pokemonName) =>
  fetch(`${SERVICES_URLS.baseUrl}${SERVICES_URLS.pokemonDetails}${pokemonName}`)
