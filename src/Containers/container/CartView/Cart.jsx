import React from 'react';
import { useCartContext } from '../../../Context/CartContext';
import ItemCart from './ItemCart';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, totalPrice } = useCartContext();

    if (cart.length === 0) {
        return (
            <>
                <p>
                    No hay productos en el carrito <Link to="/"><button>Volver</button></Link>
                </p>
            </>
        );
    }


    return (
        <>
            <Link to="/">
                <button>Agregar mas productos</button>
            </Link>
            {cart.map((product) => (
                <ItemCart key={product.id} product={product} />
            ))}
            <p>Total a abonar: {totalPrice()}</p>
        </>
    );
};

export default Cart
