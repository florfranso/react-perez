import React from 'react'
import '../Item/item.css'

const Item = ({product}) => {
    
    return (
        <div className='item'>
        <img src="product.image" alt="" />
            <h3> {product.product} </h3>
            <p className='price'>${product.precio}</p>
            <button>Ver Detalle</button>
        </div>
    )
}

export default Item
