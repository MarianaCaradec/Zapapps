// rafce
import React from 'react'
import "./NavBar.css"
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <div className='navbar'>
            <div>
                <Link to={'/'}><h1>Zapapps</h1></Link>
                <ul>
                    <li> <Link to={'/categoria/deportiva'}>Deportivas</Link> </li>
                    <li> <Link to={'/categoria/urbana'}>Urbanas</Link> </li>
                    <li> <Link to={'/categoria/formal'}>Formales</Link> </li>
                </ul>
            </div>
            <div>
                <CartWidget />
            </div>
        </div>
    )
}
