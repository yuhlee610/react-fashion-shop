import React from 'react'
import Album from './Album/Album'
import BestSeller from './BestSeller/BestSeller'
import Collection from './Collection/Collection'
import GiftCard from './GiftCard/GiftCard'
import Reviews from './Reviews/Reviews'

function ContentHome() {
    return (
        <>
            <BestSeller/>
            <Collection/>
            <GiftCard/>
            <Album/>
            <Reviews/>
        </>
    )
}

export default ContentHome
