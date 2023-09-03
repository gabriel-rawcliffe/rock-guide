import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import Area from './components/Area'
import Crag from './components/Crag'
import Sector from './components/Sector'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path=":area" element={<Area />} />
      <Route path="area/:crag" element={<Crag />} />
      <Route path="area/crag/:sector" element={<Sector />} />
    </Route>
  )
)

export default router
