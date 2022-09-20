
import React, { useState } from 'react';


const ItemCount = ({ stock, initial, onAdd }) => {

    const [contador, setContador] = useState(initial);


    const decremento = () => {
        if (contador > initial) {
            setContador(contador - 1);
        }
    }

    const aumento = () => {
        setContador(contador + 1);
    }

    const cantidadSeleccionada = () => {
        onAdd(contador);
    }



    return (
        <>
            <div style={styles.producto}>CANTIDAD</div>
            <div style={styles.contenedor}>
                <button disabled={contador <= initial} style={styles.boton} onClick={decremento}> - </button>
                <h1 style={styles.numero}> {contador} </h1>
                <button 
                    disabled={contador === stock}
                    onClick={aumento}
                    style={styles.boton}
                > + </button>
            </div>
            <div style={styles.contenedorAgregar}>
                <button style={styles.agregar} onClick={cantidadSeleccionada}> AGREGAR AL CARRITO </button>
            </div>
        </>
    )
}



//Estilos
const styles = {
    producto: {
        display: 'flex',
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:30,
    },


    contenedor: {
        display: 'flex',
        fontSize: 20,
        flexDirection: 'row',
        backgroundColor: ' #557C55',
        justifyContent: 'center',
        height: 30,
        width:150,
        padding: 10,
        marginLeft: 120,
        borderRadius: 20,
        alignItems: 'center',
    },

    boton: {
        display: 'flex',
        width: 70,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A6CF98',
        border: 'none',
        borderRadius: 10,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    },

    numero: {
        display: 'flex',
        margin: 20,
        fontSize: 30,
    },

    contenedorAgregar: {
        justifyContent: 'center',
        display: 'flex',
        marginRight: 30,
        
    },


    agregar: {
        display: 'flex',
        width: 250,
        height: 30,
        justifyContent: 'center',
        alignContent: 'center',
        border: 'none',
        borderRadius: 10,
        marginTop: 10,
        padding: 10,
        backgroundColor: ' #557C55',
        color: 'white',

    }


}

export default ItemCount


