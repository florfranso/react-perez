import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    return (
        <>
            <ShoppingCartIcon style={styles.carrito} fontSize="large" />
        </>
    )
}


//ESTILOS
const styles = {
    carrito: {
        paddingRight: '10%',
    }
}


export default CartWidget
