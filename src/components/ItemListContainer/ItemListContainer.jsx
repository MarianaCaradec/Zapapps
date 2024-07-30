import React, {useState, useEffect} from 'react'
import "./ItemListContainer.css"
import { ItemList } from '../ItemList/ItemList'
import {getProductByCategory, getProducts} from "../../asyncMock"
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const {cat} = useParams()

    useEffect(() => {
        if(cat) {
            getProductByCategory(cat)
            .then(data => setProducts(data))
            .finally(() => setLoading(false))
        } else {
            getProducts()
            .then(data => setProducts(data))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
        }
    }, [cat])

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
