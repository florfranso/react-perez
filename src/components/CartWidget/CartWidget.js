import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from '../../Context/CartContext';

const CartWidget = () => {
    const { cart } = useCartContext();
    const cartInCart = 0;

    cart.map((item) => {
        cartInCart = cartInCart + item.cantidad
    })
    /* const { totalProd } = useCartContext(""); */
    return (
        <>
            {/*             <div>{totalProd() || ""}</div>

 */}
            <div>{cartInCart}</div>
            <ShoppingCartIcon style={styles.carrito} fontSize="large" />
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


