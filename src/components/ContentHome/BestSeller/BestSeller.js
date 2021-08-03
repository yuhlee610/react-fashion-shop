import React, { useState, useEffect } from 'react'
import './BestSeller.css'
import { Spin } from 'antd';
import { connect } from 'react-redux'
import { useHistory } from 'react-router';
import withAuth from '../../../hoc/withAuth/withAuth'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

function BestSeller({ listProducts, loading, checkResize }) {
    const history = useHistory()
    
    const clickHandler = (id, sex) => {
        if(sex === 'men') {
            history.push(`/men/${id}`)
        }
        else {
            history.push(`/women/${id}`)
        }
    }

    let render = null
    if (loading) {
        render = <Spin size='large' />
    }
    else {
        render = (
            <Swiper
                slidesPerView={checkResize ? 2 : 4}
                loop={true} 
                loopFillGroupWithBlank={true}
                spaceBetween={30}
                pagination={{
                    clickable: true
                }}
                className="mySwiper"
            >

                {
                    listProducts.slice(0, 10).map(ele => {
                        const { id, image, name, price, sex } = ele
                        return (
                            <SwiperSlide key={id} onClick={() => clickHandler(id, sex)}>
                                <div className="swiper-card">
                                    <div className="img-wrapper">
                                        <img src={image} alt="" />
                                    </div>
                                    <div>{name}</div>
                                    <p>${price}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        )
    }

    return (
        <div className='best-seller'>
            <h3>We design durable travel apparel with a conscience — 100% made in America.</h3>
            <h2>Best Seller Of 2021</h2>
            {render}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        listProducts: state.listProducts,
        loading: state.loading
    }
}

export default connect(mapStateToProps, null)(withAuth(BestSeller, 590))
