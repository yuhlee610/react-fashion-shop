import React from 'react'
import './Album.css'

const album = [
    {
        image: "/images/album-1.jpg",
        text: "Men"
    },
    {
        image: "/images/album-2.jpg",
        text: "Pullovers"
    },
    {
        image: "/images/album-3.jpg",
        text: "Bags"
    },
    {
        image: "/images/album-4.jpg",
        text: "Camp"
    },
    {
        image: "/images/album-5.jpg",
        text: "Backpacks"
    },
    {
        image: "/images/album-7.jpg",
        text: "Women"
    },
]

function Album() {
    return (
        <div className='album__container'>
            <div className="album-top">
                {
                    album.map(({ image, text }, index) => (
                        <div key={index} className="album-item">
                            <img src={image} alt="" />
                            <div>{text}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Album
