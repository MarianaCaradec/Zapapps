import React, { useContext } from 'react'
import ItemCount from '../../ItemCount/ItemCount'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'

const ItemCart = ({product}) => {
    const {removeItem} = useContext(CartContext)
    return (
        <div className='element' id={product.id}>
            <h2>{product.title}</h2>
            <img className='img' src={product.img} />
            <p>${product.price}</p>
            <p>Estás llevando {product.cantidad} pares</p>
            <p>Subtotal a pagar: ${product.price * product.cantidad}</p>
            <ItemCount  product={product}/>
            <button onClick={() => removeItem(product.id)}>Borrar producto</button>
        </div>
    )
}

export default ItemCart
