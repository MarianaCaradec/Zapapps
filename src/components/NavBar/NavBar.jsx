// rafce
import React from 'react'
import "./NavBar.css"
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
    return (
        <div className='navbar'>
            <div>
                <h1>Zapapps</h1>
                <a href="">Sobre nosotros</a>
                <a href="">Contacto</a>
            </div>
            <div>
                <CartWidget />
            </div>
            
        </div>
    )
}
