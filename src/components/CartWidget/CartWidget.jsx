import React, { useContext } from 'react'
import "./CartWidget.css"
import { HiOutlineShoppingCart } from "react-icons/hi";
import { TbShoppingBagCheck } from "react-icons/tb";
import { CartContext } from '../../context/cartContext';

export const CartWidget = () => {
    const {cart, itemQuantity} = useContext(CartContext)
    console.log(cart)

    return (
        <div className='contenedor'>
            <span className='cantidad'>{itemQuantity()}</span>
            <HiOutlineShoppingCart className='carrito'/>
        </div>
    )
}
