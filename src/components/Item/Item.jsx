import React from 'react'
import './Item.css'

export const Item = ({e}) => {
    return (
        <div className='element'>
            <h1>{e.title}</h1>
            <img className='img' src={e.img} />
            <p>{e.price}</p>
            <button>Ver más</button>
        </div>
    )
}
