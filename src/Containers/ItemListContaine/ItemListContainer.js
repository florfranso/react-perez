import React from 'react';
import ItemCount from '../../components/ItemCount';

const ItemListContainer = ({ greeting }) => {

    const agregarAlCarrito = (contador) => {
        console.log("LOS PRODUCTOS FUERON CARGADOS CON EXITO");
    }

    return (
        < >
            <h1 style={styles.estilo}>{greeting}</h1>
            < ItemCount stock={7} initial={1} onAdd={agregarAlCarrito} />
        </>
    )
}


//ESTILOS

const styles = {
    estilo: {
        display: 'flex',
        fontSize: 50,
        justifyContent: 'center',
    }

}

export default ItemListContainer
