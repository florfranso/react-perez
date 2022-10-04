import React, { useState, useContext, createContext, useEffect } from "react";

//contexto
const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);


export const CustomProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    //esta en el carrito, buscar
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;


    // agregar item forma1
    /*    const addItem = (item, cantidad) => {
            isInCart(item.id)
                ?
                setCart(cart.map((prod) => {
                    if (prod.id === item.id) {
                        prod.cantidad += cantidad
                    }
                    return prod
                }))
                :
                setCart([...cart, { id: item.id, name: item.product, price: item.precio, cantidad: item.cantidad }])
        }  */

    // agregar item forma2,se sobreescribe
    /* const addItem = (item, nuevaCantidad) => {
        const newCart = cart.filter(prod => prod.id !== item.ide);
        newCart.push({ ...item, cantidad: nuevaCantidad });
        setCart(newCart)
    } */
    // agregar item forma3

    /*   const addItem = (item, nuevaCantidad)=> {
            const {cantidad = 0} = cart.find ( prod => prod.id === item.id) || {};
            const newCart = cart.filter ( prod => prod.id !== item.id);
            setCart([...cart, {...item, cantidad : cantidad + nuevaCantidad }])
        }  */
    console.log('carrito: ', cart);


    //agregar item forma 4

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
        return cart.reduce((acc, product) => acc += (product.price * product.cantidad), 0)
    }


    //suma el precio total de los productos
    //acumulador y producto
    const totalProd = () => {
        cart.reduce(
            (acc, product) => acc += product.cantidad, 0)
    }


    return (
        <>
            <CartContext.Provider
                value={{
                    addItem,
                    clearCart,
                    removeItem,
                    totalPrice,
                    totalProd,
                    cart,

                }}
            >
                {children}
            </CartContext.Provider>

        </>
    )
}


