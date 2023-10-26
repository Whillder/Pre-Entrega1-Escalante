import { useState } from 'react'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
export const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer message={"La Mejor cita, es una Cerve-cita"}/>
    </>
    
  )
}
