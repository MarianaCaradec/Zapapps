import React from 'react'
import "./ItemList.css"
import {Item} from '../Item/Item'

export const ItemList = ({products}) => {
    return (
        <div className='products'>
            {products.map((e) => {
                return (
                    <Item key={e.id} e={e} />
                )
            })}
        </div>

    )
}