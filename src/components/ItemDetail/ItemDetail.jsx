import React from 'react'
import './itemDetail.css'
import ItemCount from '../ItemCount'


const ItemDetail = ({ item }) => {
    const agregarAlCarrito = (contador) => {
        console.log("LOS PRODUCTOS FUERON CARGADOS CON EXITO")
    };

        return (
            <>
                <div className='container-ppal'>
                    <div className='container'>
                        <div className='card'>
                            <img src={item.image} alt="imagen" />
                        </div>
                        <div className='colum'>
                            <h1> {item.product} </h1>
                            <h2>{item.categoria}</h2>
                            <p className='precio'>${item.precio}</p>
                            <div>
                                <ItemCount stock={item.stock} initial={1} onAdd={agregarAlCarrito} />
                            </div>
                        </div>
                    </div>
                    <p className='descripcion'>{item.descripcion}</p>
                </div>


            </>
        )
    }

    export default ItemDetail
