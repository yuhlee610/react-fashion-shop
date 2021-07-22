import React from 'react'
import './Review.css'
import { AiFillStar } from 'react-icons/ai'

function Reviews() {
    return (
        <div className='reviews__container'>
            <h2>Reviews</h2>
            <div className="reviews__body">
                <div className="review__left">
                    <div className="rate">
                        <div className="rate__star">
                            <AiFillStar />
                        </div>
                        <div className="rate__star">
                            <AiFillStar />
                        </div>
                        <div className="rate__star">
                            <AiFillStar />
                        </div>
                        <div className="rate__star">
                            <AiFillStar />
                        </div>
                        <div className="rate__star">
                            <AiFillStar />
                        </div>
                    </div>
                    <div className="quote">
                        Couldn't be happier with the service I received from this company.
                    </div>
                    <div className="avatar">
                        <img src="/images/avatar-1.jpg" alt="" />
                    </div>
                    <div className="name">James L.</div>
                    <div className="address">Los Angeles, CA</div>
                </div>

                <div className="review__center">
                    <div className="rate">
                        <div className="rate__star">
                            <AiFillStar />
                        </div>
                        <div className="rate__star">
                            <AiFillStar />
                        </div>
                        <div className="rate__star">
                            <AiFillStar />
                        </div>
                        <div className="rate__star">
                            <AiFillStar />
                        </div>
                        <div className="rate__star">
                            <AiFillStar />
                        </div>
                    </div>
                    <div className="quote">
                        Really went out of their way to make me feel special as a customer, highly recommend!
                    </div>
                    <div className="avatar">
                        <img src="/images/avatar-2.jpg" alt="" />
                    </div>
                    <div className="name">Rachel F.</div>
                    <div className="address">Toronto, ON</div>
                </div>

                <div className="review__right">
                    <div className="rate">
                        <div className="rate__star">
                            <AiFillStar />
                        </div>
                        <div className="rate__star">
                            <AiFillStar />
                        </div>
                        <div className="rate__star">
                            <AiFillStar />
                        </div>
                        <div className="rate__star">
                            <AiFillStar />
                        </div>
                        <div className="rate__star">
                            <AiFillStar />
                        </div>
                    </div>
                    <div className="quote">
                        Fantastic fabrics, great fit and no issues going through the laundry either!
                    </div>
                    <div className="avatar">
                        <img src="/images/avatar-3.png" alt="" />
                    </div>
                    <div className="name">Sam R.</div>
                    <div className="address">Brooklyn, NY</div>
                </div>
            </div>
        </div>
    )
}

export default Reviews
