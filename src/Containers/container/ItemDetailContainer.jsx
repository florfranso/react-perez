/* import React, { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/2')
            .then((response) => response.json())
            .then(json=>{
                setProduct(json)
            })
    }, [])

    return (
        <>
            <ItemDetail item={product[]} />
        </>
    )
}

export default ItemDetailContainer */


import React, { useState, useEffect } from 'react';
import { products } from '../../assets/productos';
import { customFetch } from '../../utils/customFetch';
import { RotatingLines } from 'react-loader-spinner';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [product, setProducts] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        customFetch(products)
            .then(res => {
                setLoading(false)
                setProducts(res)
            })
    }, [])


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
                    < ItemDetail item={product[1]} />
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
