import React from "react";
import logo from '../assets/logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
    return (
        <header style={styles.container}>
            <img style={styles.imagen} src={logo} alt="logo" />
            <nav>
                <a style={styles.links} href="" >INICIO</a>
                <a style={styles.links} href="" >PRODUCTOS</a>
                <a style={styles.links} href="" >CONTACTOS</a>
            </nav>
            <ShoppingCartIcon style={styles.carrito} fontSize="large" />
        </header>
    )
}


const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#A6CF98',
    },

    imagen: {
        width: '10%',
        paddingLeft: '10%',

    },

    links: {
        padding: 10,
        listStyle: 'none',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#0f0f0f',
    },

    carrito: {
        paddingRight: '10%',
    }
}

export default NavBar