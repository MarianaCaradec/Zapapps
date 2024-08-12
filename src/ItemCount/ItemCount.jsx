import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({handleAddToCart}) => {
  const [count, setCount] = useState(1)

  return (
    <div>
      <button onClick={() => setCount(count >= 1 ? count - 1 : 0)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => handleAddToCart(count)}>Agregar al carrito</button>
    </div>

  )
}

export default ItemCount