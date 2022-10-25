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

            <nav style={styles.container}>
                <NavLink style={styles.links} to={'categoria/PLANTAS_INTERIOR'}>PLANTAS INTERIOR</NavLink>
                <NavLink style={styles.links} to={'categoria/PLANTAS_EXTERIOR'} >PLANTAS EXTERIOR</NavLink>
                <NavLink style={styles.links} to={'categoria/ACCESORIOS_DE_JARDIN'} >ACCESORIOS DE JARDIN</NavLink>
                <NavLink style={styles.links} to={'categoria/SUSTRATOS_Y_MEJORADORES'} >SUSTRATOS Y MEJORADORES</NavLink>
                <NavLink style={styles.links} to={'categoria/MACETAS'} >MACETAS</NavLink>
            </nav>
            <CartWidget />
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
        width: '45%',
        paddingLeft: '15%',

    },

    links: {
        padding: 10,
        display: 'flex',
        listStyle: 'none',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#0f0f0f',
        justifyContent: 'center',
    },

}

export default NavBar