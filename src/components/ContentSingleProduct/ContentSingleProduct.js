import { Button } from 'antd'
import React, { useState } from 'react'
import './ContentSingleProduct.css'
import { connect } from 'react-redux'
import { Spin } from 'antd'
import * as actions from '../../store/index'
import ReviewCard from './ReviewCard'

const reviewCards = [
    {
        heading: "I get so many compliments on this shirt!",
        dateAndAuthor: "Sarah Jones on Oct 26, 2018",
        body: "Everybody asks where I got it and are surprised to hear from an online shop. Love the fit!",
        stars: 5
    },
    {
        heading: "This dress is the pretiest I have!",
        dateAndAuthor: "Kelly on Oct 26, 2018",
        body: "Everybody asks where I got it and are surprised to hear from an online shop. Love the fit!",
        stars: 5
    },
]

function ContentSingleProduct({ match, listProducts, loading, onAdToCart }) {
    const [sizeProduct, setSizeProduct] = useState(null)

    const choseSizeHandler = (e) => {
        setSizeProduct(e.target.innerText)
    }

    const addToCartHandler = (id) => {
        let item = listProducts.find(ele => ele.id === id)
        let itemCart = {
            ...item,
            size: sizeProduct === null ? item.sizes[0] : sizeProduct,
            number: 1
        }
        onAdToCart(itemCart)
    }

    let render = null
    if (loading) {
        render = <Spin size='large' />
    }
    else {
        let product = listProducts.find(ele => ele.id === match.params.id)
        const { image, id, name, price, sizes } = product
        render = (
            <div className="product__top">
                <div className="product__img">
                    <img src={image} alt="" />
                </div>
                <div className="product__info">
                    <h2>{name}</h2>
                    <div className="number-reviews">2 reviews</div>
                    <div className="price">${price}</div>
                    <div className="underline"></div>
                    <div className="product__size">
                        <p>Size</p>
                        {
                            sizes.map((ele, index) => {
                                return (
                                    <button key={index} onClick={choseSizeHandler} className={`${sizeProduct === ele ? 'active' : (sizeProduct === null && index === 0) ? 'active' : null}`}>{ele}</button>
                                )
                            })
                        }
                    </div>
                    <Button onClick={() => addToCartHandler(id)} type='primary' block size='large' style={{ fontSize: '1.2rem', fontWeight: '700', background: '#000', padding: '1.4rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Add to cart</Button>
                    <div className="info__extra">
                        This is a demonstration store. You can purchase products like this from United By Blue
                    </div>
                    <div className="description">
                        Like your well-worn pair of jeans in short-sleeve button down form. Features an understated plus-sign pattern.
                        <ul>
                            <li>All-over print </li>
                            <li>Full button down placket and collar </li>
                            <li>Front left patch pocket </li>
                            <li>Natural corozo buttons throughout </li>
                            <li>Curved hemline</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className='product__container'>
            {render}

            <div className="product__bottom">
                <h2>Customer Reviews</h2>
                <p>Based on 2 reviews</p>
                <div className="product__reviews">
                    {
                        reviewCards.map(({stars, heading, body, dateAndAuthor}, index) => (
                            <ReviewCard 
                                stars={stars}
                                heading={heading}
                                body={body}
                                dateAndAuthor={dateAndAuthor}
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        listProducts: state.listProducts,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAdToCart: (item) => dispatch(actions.addToCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentSingleProduct)
