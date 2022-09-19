import React, { useState, useEffect } from 'react';
//import ItemCount from '../../components/ItemCount';
import { products } from '../../assets/productos';
import { customFetch } from '../../utils/customFetch';
import ItemList from '../../components/ItemList';
import { RotatingLines } from 'react-loader-spinner';


const ItemListContainer = ({ greeting }) => {

    // const agregarAlCarrito = (contador) => {
    //    console.log("LOS PRODUCTOS FUERON CARGADOS CON EXITO");
    //  };

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        customFetch(products).then(res => {
            setLoading(false)
            setListProducts(res)
        })
    }, [])

    return (
        < >
            <h1 style={styles.estilo}>{greeting}</h1>
            {
                loading ? (
                    <div
                        style={{
                            width: "100%",
                            height: "60vh",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <RotatingLines style={styles.spinner} />
                    </div>
                ) : (
                    < ItemList listProducts={listProducts} />
                )
            }
            {/*  < ItemCount stock={8} initial={1} onAdd={agregarAlCarrito} />
 */}
        </>
    )
}


//ESTILOS

const styles = {
    estilo: {
        display: 'flex',
        fontSize: 50,
        justifyContent: 'center',
    },

    spinner: {
        display: 'flex',
        justifyContent: 'center',
        margin: 40,
        width: "100%",
        background: "red",
    },
};


export default ItemListContainer
