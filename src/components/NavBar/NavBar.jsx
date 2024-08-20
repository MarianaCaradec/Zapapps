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
                    <li> <Link to='/categoria/deportivas'>Deportivas</Link> </li>
                    <li> <Link to='/categoria/urbanas'>Urbanas</Link> </li>
                    <li> <Link to='/categoria/formales'>Formales</Link> </li>
                </ul>
            </div>
            <div>
                <Link to='/cart'>  <CartWidget /> </Link>
            </div>
        </div>
    )
}
