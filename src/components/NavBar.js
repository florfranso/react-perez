import React from "react";
import logo from '../assets/logo.png';
import CartWidget from "../components/CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <header style={styles.container}>
            <Link to={'/'}>
                <img style={styles.imagen} src={logo} alt="logo" />
            </Link>

            <nav>
                <NavLink style={styles.links} to={'categoria/plantasinterior'}>PLANTAS INTERIOR</NavLink>
                <Link style={styles.links} to={'categoria/plantasexterior'} >PLANTAS EXTERIOR</Link>
                <Link style={styles.links} to={'categoria/macetas'} >MACETAS</Link>
                <Link style={styles.links} to={'categoria/sustratosymejoradores'} >SUSTRATOS Y MEJORADORES</Link>
                <Link style={styles.links} to={'categoria/accesoriosdejardin'} >ACCESORIOS DE JARDIN</Link>
            </nav>
            <Link to={'/cart'}> <CartWidget /></Link>
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

    branchContainer: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },

    imagen: {
        width: '33%',
        paddingLeft: '30%',

    },

    links: {
        padding: 5,
        listStyle: 'none',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#0f0f0f',
    },

}

export default NavBar