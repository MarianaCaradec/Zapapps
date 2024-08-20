import React, { useContext } from 'react'
import ItemCount from '../../ItemCount/ItemCount'
import { CartContext } from '../../context/cartContext'

const ItemCart = ({product}) => {
    const e = product
    const {removeItem} = useContext(CartContext)
    console.log(e)
    return (
        <div className='element' id={e.id}>
            <h2>{e.title}</h2>
            <img className='img' src={e.img} />
            <p>${e.price}</p>
            <p>Estás llevando {e.cantidad} pares</p>
            <p>Subtotal a pagar: ${e.price * e.cantidad}</p>
            <ItemCount  prod={e}/>
            <button onClick={() => removeItem(e.id)}>Borrar producto</button>
        </div>
    )
}

export default ItemCart
