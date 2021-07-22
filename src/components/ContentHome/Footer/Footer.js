import React from 'react'
import { IoLogoPaypal } from 'react-icons/io5'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { Input } from 'antd';
import { AiOutlineMail } from 'react-icons/ai'
import './Footer.css'

function Footer() {
    return (
        <div className='footer__container'>
            <div className="footer__item">
                <div className="item-title logo">
                    <IoLogoPaypal />
                    <span>Pinkk</span>
                </div>
                <div className="social-icons">
                    <div className="fb-icon">
                        <FaFacebookF/>
                    </div>
                    <div className="tw-icon">
                        <AiOutlineTwitter/>
                    </div>
                </div>
            </div>
            <div className="footer__item">
                <div className="item-title">MEN</div>
                <ul>
                    <li>All men</li>
                    <li>Shirts</li>
                    <li>Shorts</li>
                    <li>Broadshorts</li>
                    <li>Jackets</li>
                </ul>
            </div>
            <div className="footer__item">
                <div className="item-title">WOMEN</div>
                <ul>
                    <li>All women</li>
                    <li>Dresses</li>
                    <li>Jackets</li>
                    <li>Pants</li>
                    <li>Shirts</li>
                </ul>
            </div>
            <div className="footer__item">
                <div className="item-title">ABOUT</div>
            </div>
            <div className="footer__item item-subscribe">
                <div className="item-title">SUBSCRIBE</div>
                <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals</p>
                <Input size="large" placeholder="Enter your mail" prefix={<AiOutlineMail style={{fontSize: '1.5rem'}} />} />
            </div>
        </div>
    )
}

export default Footer
