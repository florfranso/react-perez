import React from 'react';
import { useCartContext } from '../../../Context/CartContext';

const ItemCart = ({ product }) => {
    const { removeItem } = useCartContext();

    return (
        <>
            <div>
                <>Producto: {product.product}</>
                <>Cantidad: {product.cantidad}</>
                <>Precio unitario: $ {product.precio}</>
                <>Subtotal: ${product.cantidad * product.precio}</>
                <button onClick={() => removeItem(product.id)}>
                    Eliminar Producto
                </button>
            </div>
        </>
    )
}

export default ItemCart
