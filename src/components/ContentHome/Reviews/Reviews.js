import React from 'react'
import './Review.css'
import { AiFillStar } from 'react-icons/ai'

const data = [
    {
        qoute: "Couldn't be happier with the service I received from this company.",
        avatar: "/images/avatar-1.jpg",
        name: "James L.",
        address: "Los Angeles, CA",
        stars: 5
    },
    {
        qoute: "Really went out of their way to make me feel special as a customer, highly recommend!",
        avatar: "/images/avatar-2.jpg",
        name: "Rachel F.",
        address: "Toronto, ON",
        stars: 4
    },
    {
        qoute: "Fantastic fabrics, great fit and no issues going through the laundry either!",
        avatar: "/images/avatar-3.png",
        name: "Sam R.",
        address: "Brooklyn, NY",
        stars: 3
    },
]

function Reviews() {
    return (
        <div className='reviews__container'>
            <h2>Reviews</h2>
            <div className="reviews__body">
                {data.map(({ qoute, avatar, name, address, stars }, index) => (
                    <div className="review__item" key={index}>
                        <div className="rate">
                            <Rating stars={stars}/>
                        </div>
                        <div className="quote">
                            {qoute}
                        </div>
                        <div className="avatar">
                            <img src={avatar} alt="" />
                        </div>
                        <div className="name">{name}</div>
                        <div className="address">{address}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

function Rating({stars}) {
    let rate = []
    for (let i = 0; i < stars; i++) {
        rate.push(
            <div className="rate__star" key={i}>
                <AiFillStar />
            </div>
        )
    }
    return rate
}

export default Reviews
