import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { cart } = useCartContext()

    return (
        <>
            <Link to='/cart'>
                <ShoppingCartIcon style={styles.carrito} fontSize="large" />
                <div>{cart.length}</div>
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


