import { Outlet } from 'react-router-dom'
import Header from './Header'
import { areaContext } from '../context'

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
