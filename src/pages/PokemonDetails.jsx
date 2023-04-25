import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemonDetails } from '../services'

const PokemonDetails = () => {
  const [pokemonImages, setPokemonImages] = useState([])

  const { pokemonName } = useParams()
  useEffect(() => {
    getPokemonDetails(pokemonName)
      .then((response) => response.json())
      .then((response) =>
        setPokemonImages([
          response.sprites.front_default,
          response.sprites.back_default,
          response.sprites.front_shiny,
          response.sprites.back_shiny
        ])
      )
  }, [])

  // TODO: Poner componente con detalles del pokemon
  return (
    <>
      <h1>Detalles pokemon</h1>
      <h2>{pokemonName}</h2>
      {pokemonImages.map((image) => (
        <img key={image} src={image} />
      ))}
    </>
  )
}

export default PokemonDetails
