import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartContextProvider } from './context/cartContext'
import Cart from './components/Cart/Cart'
import { Checkout } from './components/Checkout/Checkout'


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
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
    </BrowserRouter>
    
    </CartContextProvider>

    </>
  )
}

export default App
