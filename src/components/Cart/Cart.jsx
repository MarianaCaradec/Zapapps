import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import ItemCart from '../ItemCart/ItemCart'
import { Link } from 'react-router-dom'


const Cart = () => {
    const {cart, setCart} = useContext(CartContext)

    if(cart.length === 0 ){
        return(
            <div>
                <h3>Tu carro esta vacio</h3>
                <Link to='/'> Ir al inicio</Link>
            </div>
        )
    }

    return (
        <>
            {cart.length > 0 &&
                cart.map(e => {
                    return (
                        <ItemCart key={e.id} product={e}/>    
                    )
                })
            }
        <button onClick={() => setCart([])}>Vaciar carrito</button>
        <Link to='/checkout'>Realizar compra</Link>
        </>

    )
}

export default Cart
