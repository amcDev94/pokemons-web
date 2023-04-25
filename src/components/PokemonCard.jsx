import React from 'react'
import { Link } from 'react-router-dom'

const PokemonCard = ({ pokemon, pokemonIndex }) => {
  const { name } = pokemon
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonIndex}.svg`
  return (
    <Link to={`/pokemon/details/${name}`}>
      <div>
        <img src={image} />
        <h3>{name}</h3>
      </div>
    </Link>
  )
}

export default PokemonCard
