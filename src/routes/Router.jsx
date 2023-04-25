import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { PAGE_URLS } from '../utils/constants'
import PokemonList from '../components/PokemonList'
import Layout from '../components/Layout'
import PokemonDetails from '../pages/PokemonDetails'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={PAGE_URLS.home} element={<Layout />}>
      <Route index element={<PokemonList />} />
      <Route path={PAGE_URLS.pokemonDetails} element={<PokemonDetails />} />
    </Route>
  )
)

export default function Router() {
  return <RouterProvider router={router} />
}
