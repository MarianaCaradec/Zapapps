import React from 'react'
import "./CartWidget.css"
import { HiOutlineShoppingCart } from "react-icons/hi";
import { TbShoppingBagCheck } from "react-icons/tb";

export const CartWidget = () => {
    return (
        <div className='contenedor'>
            <span className='cantidad'>0</span>
            <HiOutlineShoppingCart className='carrito'/>
            <TbShoppingBagCheck className='comprado'/>
        </div>
    )
}
