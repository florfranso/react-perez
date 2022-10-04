import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { useState, useContext , useEffect} from "react";

const CartWidget = () => {
    const { cart } = useCartContext()

    let itemsInCart=0;

    cart.map((product)=>{
        itemsInCart = itemsInCart /* + product.cantidad */
    })

    return (
        <>
            <Link to='/cart'>
                <ShoppingCartIcon style={styles.carrito} fontSize="large" />
                <div>{itemsInCart}</div>
            </Link>
        </>
    )
}


//ESTILOS
const styles = {
    carrito: {
        paddingRight: '10%',
        marginRight: '20%',
    }
}


export default CartWidget


