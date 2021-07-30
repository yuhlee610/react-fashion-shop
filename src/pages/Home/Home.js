import React from 'react'
import Album from '../../components/ContentHome/Album/Album'
import Collection from '../../components/ContentHome/Collection/Collection'
import GiftCard from '../../components/ContentHome/GiftCard/GiftCard'
import Reviews from '../../components/ContentHome/Reviews/Reviews'
import BestSeller from '../../components/ContentHome/BestSeller/BestSeller'
import withScrollToTop from '../../hoc/ScrollToTop/ScrollToTop'

function Home() {
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

export default withScrollToTop(Home)
