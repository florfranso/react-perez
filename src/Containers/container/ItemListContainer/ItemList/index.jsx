import React from 'react'
import Item from '../Item'
import '../ItemList/itemList.css'

const ItemList = ({ listProducts }) => {
    return (
        <div className='item_container'>
            {listProducts.map((prod, i) =>
                < Item key={`${prod.product}-${i}`} product={prod} />)}
        </div>
    )
}

export default ItemList
