import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <NavBar />

    <Routes>
      <Route path='/' element={<ItemListContainer />}/>
      <Route path='/categoria/:cat' element={<ItemListContainer />}/>
      <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
