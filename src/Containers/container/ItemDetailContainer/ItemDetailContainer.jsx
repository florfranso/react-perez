import React, { useState, useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import ItemDetail from './ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../../../firebase/firebase';
import { doc, getDoc, collection } from "firebase/firestore";


const ItemDetailContainer = () => {
    //Hooks
    const [product, setProducts] = useState({})
    const [loading, setLoading] = useState(true)
    let { IdProducto } = useParams()

    useEffect(() => {
        const productsCollection = collection(db, 'products');
        const refDoc = doc(productsCollection, IdProducto)

        getDoc(refDoc)
            .then((result) => {
                setProducts({
                    id: result.id,
                    ...result.data(),
                })
            })
            .finally(() => {
                setLoading(false)
            })
    }, [IdProducto]);

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
