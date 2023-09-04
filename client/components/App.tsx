import { Outlet } from 'react-router-dom'
import Header from './Header'
import { areaContext } from '../context'
import { ChakraProvider } from '@chakra-ui/react'

export default function App() {
  return (
    <ChakraProvider>
      <Header />
      <Outlet />
    </ChakraProvider>
  )
}
