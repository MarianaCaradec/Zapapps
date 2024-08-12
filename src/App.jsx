import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartContextProvider } from './context/cartContext'


function App() {

  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
    <NavBar />

    <Routes>
      <Route path='/' element={<ItemListContainer />}/>
      <Route path='/categoria/:cat' element={<ItemListContainer />}/>
      <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
    </CartContextProvider>

    </>
  )
}

export default App
