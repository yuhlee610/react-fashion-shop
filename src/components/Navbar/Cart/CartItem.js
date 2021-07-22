import React from 'react'
import { InputNumber } from 'antd';

function CartItem({image, name, size, amount, number, id, price, changeCartNumberHandler}) {
    return (
        <div className="cart__card">
            <img src={image} alt="" />
            <div className="card__info">
                <div>{name}</div>
                <p>Size: {size}</p>
                <InputNumber min={0} max={amount} defaultValue={number} value={number} onChange={(value) => changeCartNumberHandler(value, { id, size })} />
            </div>
            <div className="price">${price}</div>
        </div>
    )
}

export default CartItem
