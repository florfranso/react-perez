import React, { useState, useEffect } from 'react';
import { products } from '../../../assets/productos';
import { customFetch } from '../../../utils/customFetch';
import { RotatingLines } from 'react-loader-spinner';
import ItemDetail from './ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
//Hooks
    const [product, setProducts] = useState({})
    const [loading, setLoading] = useState(true)
    let {IdProducto} = useParams()


    useEffect(() => {
        customFetch(products)
            .then(res => {
                setLoading(false)
                setProducts(res.find((products)=> products.id === parseInt (IdProducto)))
            })
    }, [IdProducto])


    return (
        < >
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
                   // < ItemDetail item={product[1]} />
                    < ItemDetail item={product} />

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


export default ItemDetailContainer
