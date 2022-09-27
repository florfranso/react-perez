import React from 'react'
import './item.css';
import { Link } from "react-router-dom";

const Item = ({ product }) => {

    return (
        <div className='item'>
            <img src={product.image}/* "product.image" */ alt="" />
            <h3> {product.product} </h3>
            <p className='price'>${product.precio}</p>
            <Link to={`/product/${product.id}`}>
                <button>AMPLIAR</button>
            </Link>
        </div>
    )
}

export default Item
