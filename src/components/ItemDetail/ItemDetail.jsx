import React from 'react'
import './itemDetail.css'
import ItemCount from '../ItemCount'

const ItemDetail = ({ item }) => {

    return (
        <div className='item'>
            <img src={item.image} alt="imagen" />
            <h1> {item.product} </h1>
            <p className='price'>${item.precio}</p>
            <h2>{item.categoria}</h2>
            <div>{item.descripcion}</div>
            <div>{ItemCount}</div>
        </div>
    )
}

export default ItemDetail
