import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

const CartWidget = () => {
    const { cart } = useCartContext()

    const [itemsInCart, setItemsInCart] = useState(0);

    useEffect(() => {
        if (cart.length) {
            let totalProd = 0;
            cart.forEach(item => totalProd += item.cantidad);
            setItemsInCart(totalProd);
        }
    }, [cart]);


    return (
        <>
            <Link to='/cart'>
                <ShoppingCartIcon style={styles.carrito} fontSize="large" />
                {cart.length ? <span>{itemsInCart}</span> : null}
            </Link>
        </>
    )
}


//ESTILOS
const styles = {
    carrito: {
        paddingRight: '150px',
        marginRight: '20%',
    }
}

export default CartWidget


