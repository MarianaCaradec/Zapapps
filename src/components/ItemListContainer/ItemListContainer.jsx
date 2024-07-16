import React, {useState, useEffect} from 'react'
import "./ItemListContainer.css"
import { ItemList } from '../ItemList/ItemList'
import {getProducts} from "../../asyncMock"

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

useEffect(() => {
    getProducts()
    .then(data => setProducts(data))
    .catch(error => setError(error))
    .finally(() => setLoading(false))
}, [])

    if(loading){
        return (
            <h2>Cargando...</h2>
        )
    }

    if(error){
        return (
            <h2>{error}</h2>
        )
    }

    return (
        products.length > 0 &&
        <ItemList products={products}/>
    )
}
