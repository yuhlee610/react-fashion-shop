import { Button } from 'antd'
import React from 'react'
import './GiftCard.css'

function GiftCard() {
    return (
        <div className='gift-card__container'>
            <div className="gift-card__content">
                <h3>GIFT CARDS</h3>
                <h2>Support your neighborhood</h2>
                <p>We believe that local businesses are an integral part of a neighborhood's character. Help keep us local by buying a gift card!</p>
                <Button type='primary'>Shop gift cards</Button>
            </div>
            <div className="gift-card__img">
                <img src="/images/gift-card.jpg" alt="" />
            </div>
        </div>
    )
}

export default GiftCard
