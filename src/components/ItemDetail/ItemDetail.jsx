import React, { useContext } from 'react'
import ItemCount from '../../ItemCount/ItemCount'
import { CartContext } from '../../context/cartContext'

export const ItemDetail = ({product}) => {
    const {id, title, img, desc, price} = product

    const {addToCart} = useContext(CartContext)

    const handleAddToCart = (count) => {
        addToCart(product, count)
    }

    return (
        <div key={id}>
            <h2>{title}</h2>
            <img className='img' src={img} />
            <p>{desc}</p>
            <p>${price}</p>
            <ItemCount handleAddToCart={handleAddToCart}/>
        </div>

    )
}

