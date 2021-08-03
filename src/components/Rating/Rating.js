import React from 'react'
import { AiFillStar } from 'react-icons/ai'

function Rating({ stars }) {
    let rate = []
    for (let i = 0; i < stars; i++) {
        rate.push(
            <AiFillStar key={i}/>
        )
    }
    return rate
}

export default Rating
