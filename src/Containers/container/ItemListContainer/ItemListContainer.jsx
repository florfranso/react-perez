import React, { useState, useEffect } from 'react';
import { products } from '../../../assets/productos';
import { customFetch } from '../../../utils/customFetch';
import ItemList from './ItemList';
import { RotatingLines } from 'react-loader-spinner';
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {

    let { IdCategoria } = useParams();
    console.log(IdCategoria);


    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        customFetch(products)
            .then(res => {
                if (IdCategoria) {
                    setListProducts(res.filter((products) => products.categoria === IdCategoria.toUpperCase())
                    );
                    setLoading(false)
                } else {
                    setListProducts(res)
                    setLoading(false)
                }
            })
    }, [IdCategoria])


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
