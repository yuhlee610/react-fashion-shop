import React from 'react'

function CardItem({ id, clickProductHandler, image, name, price }) {
    return (
        <div className="card-item" key={id} onClick={() => clickProductHandler(id)}>
            <div className="card__img">
                <img src={image} alt="" />
            </div>
            <p>{name}</p>
            <div>${price}</div>
        </div>
    )
}

export default CardItem
