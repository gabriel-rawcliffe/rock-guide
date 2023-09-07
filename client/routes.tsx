import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import App from './components/pages/App'
import Home from './components/pages/Home'
import Area from './components/pages/Area'
import Crag from './components/pages/Crag'
import Sector from './components/pages/Sector'
import Register from './components/pages/Register'
import Landing from './components/pages/Landing'
import Ticklist from './components/pages/Ticklist'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path=":area" element={<Area />} />
      <Route path="area/:crag" element={<Crag />} />
      <Route path="area/crag/:sector" element={<Sector />} />
      <Route path="register" element={<Register />} />
      <Route path="user/ticklist" element={<Ticklist />} />
    </Route>
  )
)

export default router
