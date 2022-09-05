import React from "react";
import logo from '../assets/logo.png';
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <header style={styles.container}>
            <img style={styles.imagen} src={logo} alt="logo" />
            <nav>
                <a style={styles.links} href="" >INICIO</a>
                <a style={styles.links} href="" >PRODUCTOS</a>
                <a style={styles.links} href="" >CONTACTOS</a>
            </nav>
            <CartWidget/>
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
        paddingLeft: '7%',

    },

    links: {
        padding: 10,
        listStyle: 'none',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#0f0f0f',
    },

}

export default NavBar