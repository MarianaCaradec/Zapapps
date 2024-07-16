import React from 'react'
import './Item.css'

export const Item = ({e}) => {
    return (
        <div className='element'>
            <h1>{e.title}</h1>
            <p>{e.desc}</p>
            <p>{e.price}</p>
            <button>Comprar</button>
        </div>
    )
}
