import React from 'react'
import { Carousel } from 'antd';
import './MyCarousel.css'


function MyCarousel() {

    return (
        <div className="MyCarousel">
            <Carousel autoplay >
                <div>
                    <img src={'/images/bg-1.jpg'} alt=''/>
                </div>
                <div>
                    <img src={'/images/bg-2.jpg'} alt=''/>
                </div>
                <div>
                    <img src={'/images/bg-3.jpg'} alt=''/>
                </div>
                <div>
                    <img src={'/images/bg-4.jpg'} alt=''/>
                </div>
            </Carousel>
        </div>
    )
}

export default MyCarousel
