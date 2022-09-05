import React from 'react'

const ItemListContainer = (props) => {
    return (
        <div >
            <h1 style={styles.estilo}>{props.greeting}</h1>
        </div>
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
