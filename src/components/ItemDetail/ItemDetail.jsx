import React from 'react'
import Button from '../Button/Button'

export const ItemDetail = ({product}) => {
    const {title, img, desc, price} = product

    return (
        <div>
            <h1>{title}</h1>
            <img className='img' src={img} />
            <p>{desc}</p>
            <p>{price}</p>
            <Button />
        </div>

    )
}

