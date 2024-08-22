import React, { useContext, useState } from 'react'
import './Checkout.css'
import { dataBase } from '../../services/firebaseConfig'
import { addDoc, collection } from 'firebase/firestore'
import { CartContext } from '../../context/cartContext'

export const Checkout = () => {
    const [nombre, setNombre] = useState("")
    const [mail, setMail] = useState("")
    const [dir, setDir] = useState("")
    const [order, setorder] = useState("")
    const [isSubmiting, setIsSubmiting] = useState(false)
    
    const {cart, setCart} = useContext(CartContext)

    const formatedOrder = {
            cart: cart,
            nombre,
            mail,
            dir
    }

    const handleSubmit = async (e) => {
        setIsSubmiting(true)
        e.preventDefault()
        const orderRef = collection(dataBase, 'ordenes')
        const orderId = await addDoc(orderRef, formatedOrder)
        setCart([])
        setorder(orderId.id)
        setIsSubmiting(false)
    }

    if(order) {
        return <h3>¡Muchas gracias por tu compra! Tu número de transacción es: {order}</h3>
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <p className='label'>Nombre: </p>
                <input type="text" placeholder='Nombre y apellido' onChange={e => setNombre(e.target.value)}/>
                <p className='label'>Mail: </p>
                <input type="text" placeholder='Correo electronico' onChange={e => setMail(e.target.value)}/>
                <p className='label'>Dirección: </p>
                <input type="text" placeholder='Destino del envio' onChange={e => setDir(e.target.value)}/>
                <button type='submit'>{isSubmiting ? 'Cargando...' : 'Confirmar compra'}</button>
            </form>
        </div>
    )
}
