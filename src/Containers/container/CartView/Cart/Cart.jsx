import React from 'react';
import { useCartContext } from '../../../../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import { Link } from 'react-router-dom';
import '../Cart/cart.css'


const Cart = () => {

    const { cart, totalPrice, clearCart } = useCartContext();

    if (cart.length === 0) {
        return (
            <div className='texto'>
                <p >
                    TU CARRITO ESTA VACIO :(
                </p>
                <Link to="/"><button className='volver'>Volver</button></Link>
            </div>
        );
    }


    return (
        <div className='texto'>
            <Link to="/">
                <button className='botonAgregar'>Agregar mas productos</button>
            </Link>
            {cart.map((product) => (
                <ItemCart key={product.id} product={product} />
            ))}
            <p>Total a abonar: ${totalPrice()}</p>
            <button className='botonVaciarPagar' onClick={() => clearCart()}>
                VACIAR CARRITO
            </button>
            <Link to="/form"><button className='botonVaciarPagar'>Ir a pagar</button></Link>
        </div>
    );
};

export default Cart
