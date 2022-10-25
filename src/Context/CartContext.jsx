import React, { useState, useContext, createContext } from "react";


const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CustomProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    //esta en el carrito?
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    //agregar item
    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            const newCart = cart.map(prod => {
                if (prod.id === item.id) {
                    const newCantidad = prod.cantidad + cantidad
                    return { ...prod, cantidad: newCantidad }
                } else {
                    return prod
                }
            })
            setCart(newCart)
        } else {
            const newProduct = { ...item, cantidad: cantidad }
            setCart([...cart, newProduct])
        }
    }

    //borrar todos los item
    const clearCart = () => setCart([]);

    //remover item
    const removeItem = (id) => setCart(cart.filter(product => product.id !== id));

    //precio total
    const totalPrice = () => {
        return cart.reduce((acc, product) => acc += (product.precio * product.cantidad), 0)
    }


    return (
        <>
            <CartContext.Provider
                value={{
                    addItem,
                    clearCart,
                    removeItem,
                    totalPrice,
                    cart,
                }}
            >
                {children}
            </CartContext.Provider>
        </>
    )
}


