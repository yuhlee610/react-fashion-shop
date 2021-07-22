import React, { useState } from 'react'
import Aux from '../MyAux/MyAux'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Navbar/Sidebar/Sidebar'
import Footer from '../../components/ContentHome/Footer/Footer'
import MyCarousel from '../../components/Carousel/MyCarousel'

function Layout({children}) {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <Aux>
            <Navbar showHandler={setShowMobileMenu} />
            <Sidebar show={showMobileMenu} showHandler={setShowMobileMenu} />
            <MyCarousel/>
            <main>
                {children}
            </main>
            <Footer/>
        </Aux>
    )
}

export default Layout
