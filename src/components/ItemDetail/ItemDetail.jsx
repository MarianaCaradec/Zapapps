import React from 'react'
import Button from '../Button/Button'

export const ItemDetail = ({product}) => {
    console.log(product)
    const {id, title, img, desc, price} = product

    return (
        <div key={id}>
            <h2>{title}</h2>
            <img className='img' src={img} />
            <p>{desc}</p>
            <p>{price}</p>
            <Button />
        </div>

    )
}

