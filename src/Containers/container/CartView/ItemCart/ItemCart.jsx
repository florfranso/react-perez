import React from 'react';
import { useCartContext } from '../../../../Context/CartContext';
import '../ItemCart/ItemCart.css'

const ItemCart = ({ product }) => {
    const { removeItem } = useCartContext();

    return (
        <>
            <div className='contenedor'>
                <img src={product.image} alt="" />
                <p>Producto: {product.product}</p>
                <p>Cantidad: {product.cantidad}</p>
                <p>Precio unitario: $ {product.precio}</p>
                <p>Subtotal: ${product.cantidad * product.precio}</p>
                <button onClick={() => removeItem(product.id)}>❌</button>
            </div>
        </>
    )
}

export default ItemCart
