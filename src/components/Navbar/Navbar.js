import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { IoLogoPaypal } from 'react-icons/io5'
import { IoIosArrowDown } from 'react-icons/io'
import Search from './Search/Search'
import { AiOutlineBars } from 'react-icons/ai'
import Cart from './Cart/Cart'
import { connect } from 'react-redux';
import * as actions from '../../store/index'
import { RiAccountCircleLine } from 'react-icons/ri'
import { Dropdown } from 'antd';
import MenuDropDown from './MenuDropDown/MenuDropDown'


function Navbar({ showHandler, onSetSelectedSubcategory }) {
    const menSubcategory = ['All men', 'Shirts', 'Shorts', 'Jackets', 'Boardshorts']
    const womenSubcategory = ['All women', 'Dresses', 'Jackets', 'Shirt', 'Pants']

    const [navStick, setNavStick] = useState(false)

    function scrollHeader() {
        if (window.scrollY >= 300) {
            setNavStick(true);
        }
        else {
            setNavStick(false);
        }
    }

    window.addEventListener("scroll", scrollHeader);

    const clickSubcateHandler = (e) => {
        onSetSelectedSubcategory(e.target.innerText);
    }

    return (
        <nav className={`navbar ${navStick && 'stick'}`}>
            <div className="navbar-container">
                <Link to='/' className='navbar-logo'>
                    <IoLogoPaypal />
                    <span>Pinkk</span>
                </Link>

                <ul className='main-menu'>
                    <li className="nav-item">
                        <Link to='/men' className='nav-link nav-link--men' onClick={() => onSetSelectedSubcategory('All men')}>
                            Men
                            <span className="arrow">
                                <IoIosArrowDown />
                            </span>
                        </Link>

                        <div className="nav__submenu nav__submenu--men">
                            <ul className="submenu__list">
                                {
                                    menSubcategory.map((ele, index) => {
                                        return (
                                            <li onClick={clickSubcateHandler} key={index}>
                                                <Link to='/men' className='nav__submenu-link'>
                                                    {ele}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>

                            <div className="submenu__card">
                                <img src={'/images/shirt-card.jpg'} alt="" />
                                <div>Spring/Summer 2021</div>
                                <p>View the collection</p>
                            </div>
                            <div className="submenu__card">
                                <img src={'/images/shop.jpg'} alt="" />
                                <div>Back in business</div>
                                <p>Visit our store</p>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to='/women' className='nav-link nav-link--women' onClick={() => onSetSelectedSubcategory('All women')}>
                            Women
                            <span className="arrow">
                                <IoIosArrowDown />
                            </span>
                        </Link>

                        <div className="nav__submenu nav__submenu--women">
                            <ul className="submenu__list">
                                {
                                    womenSubcategory.map((ele, index) => {
                                        return (
                                            <li key={index} onClick={clickSubcateHandler}>
                                                <Link to='/women' className='nav__submenu-link'>
                                                    {ele}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>

                            <div className="submenu__card">
                                <img src={'/images/19258.jpg'} alt="" />
                                <div>Spring/Summer 2021</div>
                                <p>View the collection</p>
                            </div>
                            <div className="submenu__card">
                                <img src={'/images/the-cliff-hotel-spa.jpg'} alt="" />
                                <div>Off the beaten path</div>
                                <p>Read our travel journal</p>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className='nav-link'>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact' className='nav-link'>
                            Contact
                        </Link>
                    </li>
                </ul>

                <div className="menu-icons">
                    <Search />

                    <div className="menu-icons__bars" onClick={() => showHandler(true)}>
                        <AiOutlineBars />
                    </div>

                    <Cart />

                    <Dropdown overlay={<MenuDropDown/>}>
                        <div className="menu-icons__account">
                            <RiAccountCircleLine />
                        </div>
                    </Dropdown>
                </div>
            </div>
        </nav>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onSetSelectedSubcategory: (value) => dispatch(actions.selectSubcategory(value))
    }
}

export default connect(null, mapDispatchToProps)(Navbar)
