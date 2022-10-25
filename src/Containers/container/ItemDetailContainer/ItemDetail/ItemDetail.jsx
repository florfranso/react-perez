import React from 'react';
import './itemDetail.css';
import ItemCount from '../../../../components/ItemCount';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from '../../../../Context/CartContext';

const ItemDetail = ({ item }) => {

    const [terminarCompra, setTerminarCompra] = useState();
    const { addItem } = useCartContext()

    const onAdd = (cantidad) => {
        setTerminarCompra(true);
        addItem(item, cantidad);
    };

    return (
        <>
            <Link  to="/">
                <button className='botonVolver'>Volver</button>
            </Link>
            <div className='containerPpal'>
                <div className='container'>
                    <div className='card'>
                        <img src={item.image} alt="imagen" />
                    </div>
                    <div className='colum'>
                        <h1> {item.product} </h1>
                        <h2>{item.categoria}</h2>
                        <p className='precio'>${item.precio}</p>
                        <div >
                            {terminarCompra ? (
                                <Link to="/cart">
                                    <button className='agregar'>FINALIZAR COMPRA</button>
                                </Link>
                            ) : (
                                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                            )}
                        </div>
                    </div>
                </div>
                <p className='descripcion'>{item.descripcion}</p>
            </div>
        </>
    )
}


export default ItemDetail
