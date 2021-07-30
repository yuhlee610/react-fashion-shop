import React from 'react'
import './About.css'
import { Button } from 'antd'

function About() {
    return (
        <div className='about__section'>
            <h3>When we set out to create eight pieces that would bring out the best of both Chaco and United By Blue, we knew there were a couple things we had to bring to the table: Every piece had to be both land and water friendly, and made with the outdoors in mind. </h3>
            <h2>Retail locations</h2>
            <div className="about__body">

                <div className="store">
                    <div className="store__img">
                        <img src="/images/store-1.jpg" alt="" />
                    </div>
                    <div className="store__info">
                        <p>EST. 2002</p>
                        <h4>Our Brooklyn store</h4>
                        <div>Where it all started. You'll find all the brands we carry here in a restored 1800's tile factory warehouse in downtown Williamsburg.</div>
                    </div>
                </div>

                <div className="store bottom">
                    <div className="store__img">
                        <img src="/images/store-2.jpg" alt="" />
                    </div>
                    <div className="store__info">
                        <p>EST. 2004</p>
                        <h4>Downtown Philly</h4>
                        <div>Our first expansion. You'll find our core product line here in a restored 1800's tile factory warehouse in downtown Philadelphia.</div>
                        <Button type='primary' style={{backgroundColor: '#000', fontSize: '1rem', fontWeight: '700', display: 'flex', alignItems: 'center', padding: '1.5rem 2rem', marginTop: '1rem'}}>Get directions</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
