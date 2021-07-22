import React from 'react'
import './Album.css'

function Album() {
    return (
        <div className='album__container'>
            <div className="album-top">
                <div className="album-item album-top__first">
                    <img src="/images/album-1.jpg" alt="" />
                    <div>Men</div>
                </div>
                <div className="album-item">
                    <img src="/images/album-2.jpg" alt="" />
                    <div>Pullovers</div>
                </div>
                <div className="album-item">
                    <img src="/images/album-3.jpg" alt="" />
                    <div>Bags</div>
                </div>
                <div className="album-item">
                    <img src="/images/album-4.jpg" alt="" />
                    <div>Camp</div>
                </div>
                <div className="album-item">
                    <img src="/images/album-5.jpg" alt="" />
                    <div>Backpacks</div>
                </div>
                <div className="album-item album-top__last">
                    <img src="/images/album-7.jpg" alt="" />
                    <div>Women</div>
                </div>
            </div>
        </div>
    )
}

export default Album
