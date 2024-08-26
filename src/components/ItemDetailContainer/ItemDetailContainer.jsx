import React, {useState, useEffect} from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import {doc, getDoc} from 'firebase/firestore'
import { dataBase } from '../../services/firebaseConfig'

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    
    const {id} = useParams()

    useEffect(() => {
        const productRef = doc(dataBase, 'items', id)

        getDoc(productRef).then(snapshot => {
            const dataProduct = snapshot.data()
            const productDetailed = {...dataProduct, id: snapshot.id}
            setProduct(productDetailed)
        }).finally(() => setLoading(false))
    }, [])

    if(loading) {
        <h2>Cargando...</h2>
    }

    return (
        product &&
        <ItemDetail product={product}/>
    )
}
