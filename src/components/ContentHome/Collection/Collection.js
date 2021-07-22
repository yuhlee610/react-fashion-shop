import React from 'react'
import './Collection.css'
import { Button } from 'antd'

function Collection() {
    return (
        <div className='collection-container'>
            <div className="collection-images">
                <img src="/images/collection-1.jpg" alt="" />
                <img src="/images/collection-2.jpg" alt="" />
                <img src="/images/collection-3.jpg" alt="" />
                <img src="/images/collection-4.jpg" alt="" />
                <img src="/images/collection-5.jpg" alt="" />
            </div>

            <div className="collection-content">
                <h3>Brand new</h3>
                <h2>Summer wear</h2>
                <div>Check out our comfy crewnecks, lightweight khakis, breathable tanktops and more.</div>
                <div className="buttons">
                    <Button type='primary'>Shop Tops</Button>
                    <Button type='primary'>Shop All Womens</Button>
                </div>
            </div>
        </div>
    )
}

export default Collection
