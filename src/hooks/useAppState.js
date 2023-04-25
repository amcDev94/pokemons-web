import { useState, useEffect } from 'react'
import { getAllPokemons } from '../services'

const useAppState = () => {
  const [pokemons, setPokemons] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getAllPokemons()
      .then((response) => response.json())
      .then((response) => {
        setPokemons(response.results)
      })
      .finally(() => setIsLoading(false))
  }, [])

  return { pokemons, isLoading }
}

export default useAppState
