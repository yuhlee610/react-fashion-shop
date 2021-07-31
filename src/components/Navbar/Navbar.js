import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { IoLogoPaypal } from 'react-icons/io5'
import Search from './Search/Search'
import { AiOutlineBars } from 'react-icons/ai'
import Cart from './Cart/Cart'
import { connect } from 'react-redux';
import * as actions from '../../store/index'
import { RiAccountCircleLine } from 'react-icons/ri'
import { Dropdown } from 'antd';
import MenuDropDown from './MenuDropDown/MenuDropDown'
import NavbarItem from './NavbarItem'

const menSubcategory = ['All men', 'Shirts', 'Shorts', 'Jackets', 'Boardshorts']
const womenSubcategory = ['All women', 'Dresses', 'Jackets', 'Shirts', 'Pants']

const menCard = [
    {
        image: "/images/shirt-card.jpg",
        title: "Spring/Summer 2021",
        text: 'View the collection'
    },
    {
        image: "/images/shop.jpg",
        title: "Back in business",
        text: "Visit our store"
    }
]

const womenCard = [
    {
        image: "/images/19258.jpg",
        title: "Autumn/Winter 2021",
        text: 'View the collection'
    },
    {
        image: "/images/the-cliff-hotel-spa.jpg",
        title: "Off the beaten path",
        text: "Read our travel journal"
    }
]

function Navbar({ showHandler, onSetSelectedSubcategory }) {

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


    return (
        <nav className={`navbar ${navStick && 'stick'}`}>
            <div className="navbar-container">
                <Link to='/' className='navbar-logo'>
                    <IoLogoPaypal />
                    <span>Pinkk</span>
                </Link>

                <ul className='main-menu'>
                    {["men", "women"].map((ele, index) => (
                        <NavbarItem
                            gender={ele}
                            key={index}
                            subcategories={ele === "men" ? menSubcategory : womenSubcategory}
                            onSetSelectedSubcategory={onSetSelectedSubcategory}
                            cards={ele === "men" ? menCard : womenCard}
                        />
                    ))}

                    {["about", "contact"].map((ele, index) => (
                        <li className="nav-item" key={index}>
                            <Link to='/about' className='nav-link'>
                                {ele}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="menu-icons">
                    <Search />

                    <div className="menu-icons__bars" onClick={() => showHandler(true)}>
                        <AiOutlineBars />
                    </div>

                    <Cart />

                    <Dropdown overlay={<MenuDropDown />}>
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
