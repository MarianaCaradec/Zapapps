import React, { useState } from 'react'
import './Item.css'
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer'
import { Link } from 'react-router-dom'


export const Item = ({e}) => {
    return (
        <div className='element'>
            <h1>{e.title}</h1>
            <img className='img' src={e.img} />
            <p>{e.price}</p>
            <Link to={`/detalle/${e.id}`}>Ver más</Link>
        </div>
    )
}
