import React, {useState, useEffect} from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { getOneProduct } from '../../asyncMock'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        getOneProduct(id)
        .then(data => setProduct(data))
        .finally(() => setLoading(false))
    }, [id])

    if(loading) {
        <h2>Cargando...</h2>
    }

    return (
        product.length > 0 &&
        <ItemDetail producto={product}/>
    )
}
