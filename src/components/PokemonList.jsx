import React from 'react'
import PokemonCard from './PokemonCard'
import { useAppState } from '../hooks'

const PokemonList = () => {
  const { pokemons, isLoading } = useAppState()

  return (
    <div>
      {isLoading && <h4>Loading...</h4>}
      {!isLoading && (
        <ul>
          {pokemons.map((pokemon, pokemonIndex) => (
            <li key={pokemon.name}>
              <PokemonCard pokemon={pokemon} pokemonIndex={pokemonIndex + 1} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default PokemonList
