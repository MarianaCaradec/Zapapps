import React, { useContext } from 'react'
import './ItemDetail.css'
import ItemCount from '../../ItemCount/ItemCount'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'

export const ItemDetail = ({product}) => {
    const {id, title, img, desc, price} = product

    const {isInCart} = useContext(CartContext)

    return (
        <div>
            <h2>{title}</h2>
            <img className='img' src={img} />
            <p>{desc}</p>
            <p>${price}</p>
            {
            isInCart(product.id) ? 
            <Link className='link' to='/cart'>Ir al carrito</Link> 
            : <ItemCount product={product}/>
            }
        </div>
    )
}

