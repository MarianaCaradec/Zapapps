import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        if(isInCart(item.id)) {
            setCart(cart.map(product => product.id === item.id ? {...product, cantidad: product.cantidad + quantity} : product))
        } else {
            setCart([...cart, {...item, cantidad: quantity}])
        }
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }

    const itemQuantity = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const total = () => {
        return cart.reduce((acc, item) => acc + item.cantidad * item.price, 0)
    }

    return (
        <CartContext.Provider value={{cart, setCart, addToCart, isInCart, itemQuantity, total}}>
            {children}
        </CartContext.Provider>
    )
}