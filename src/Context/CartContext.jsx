import React, { useState, useContext, createContext } from "react";

//contexto
const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);


export const CustomProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    //esta en el carrito, buscar
    const isInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false;
    }

    // agregar item
    const addItem = (item, cantidad) => {
        isInCart(item.id)
            ?
            setCart(cart.map((prod) => {
                if (prod.id === item.id) {
                    prod.cantidad += cantidad
                }
                return prod
            }))
            :
            setCart([...cart, { id: item.id, name: item.product, price: item.precio, cantidad: cantidad }])
    }

    /* if (isInCart(item.id)) {
                setCart(cart.map((product) => {
                    return product.id === item.id
                        ? { ...product, cantidad: product.cantidad + cantidad }
                        : product;
                })
                );
            } else {
                setCart([...cart, { ...item, cantidad }]);
            }
        }; */
    // console.log("Cart de CartContext:", cart);


    //remover item
    const removeItem = (id) => {
        setCart(cart.filter((product) => product.id !== id))
    };

    //precio total
    const totalPrice = () =>
        cart.reduce((prev, act) => prev + act.cantidad * act.precio, 0);

    //suma el precio total de los productos
    const totalProd = () =>
        cart.reduce(
            (acumulador, producActual) => acumulador + producActual.cantidad,
            0
        )

    //borrar todos los item
    const clearCart = () => setCart([]);



    return (
        <>
            <CartContext.Provider
                value={{
                    addItem,
                    clearCart,
                    //isInCart,
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


