import React, { useState } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'
import { IoMdClose } from 'react-icons/io'
import Overlay from '../../Overlay/Overlay'
import { connect } from 'react-redux'
import * as actions from '../../../store/index'

function Sidebar({ show, showHandler, onSetSelectedSubcategory }) {
    const [showMenSubmenu, setShowMenSubmenu] = useState(false)
    const [showWomenSubmenu, setShowWomenSubmenu] = useState(false)

    const menSubcategory = ['All men', 'Shirts', 'Shorts', 'Jackets', 'Boardshorts']
    const womenSubcategory = ['All women', 'Dresses', 'Jackets', 'Shirts', 'Pants']

    const clickSubcateHandler = (e) => {
        onSetSelectedSubcategory(e.target.innerText);
    }

    return (
        <>
            <div className={`sidebar-container ${show && 'active'}`}>
                <div className="sidebar__close" onClick={() => showHandler(false)}>
                    <IoMdClose />
                </div>

                <ul className='sidebar__menu'>
                    <li className="sidebar-item" onClick={() => setShowMenSubmenu(!showMenSubmenu)}>
                        <div className='sidebar-link'>
                            Men
                            <span className="arrow">
                                <IoIosArrowDown />
                            </span>
                        </div>

                        <ul className={`submenu ${showMenSubmenu && 'active'}`}>
                            {
                                menSubcategory.map((ele, index) => {
                                    return (
                                        <li onClick={clickSubcateHandler} key={index}>
                                            <Link to='/men'>
                                                {ele}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </li>
                    <li className="sidebar-item" onClick={() => setShowWomenSubmenu(!showWomenSubmenu)}>
                        <div className='sidebar-link'>
                            Women
                            <span className="arrow">
                                <IoIosArrowDown />
                            </span>
                        </div>

                        <ul className={`submenu ${showWomenSubmenu && 'active'}`}>
                            {
                                womenSubcategory.map((ele, index) => {
                                    return (
                                        <li onClick={clickSubcateHandler} key={index}>
                                            <Link to='/women'>
                                                {ele}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </li>
                    <li className="sidebar-item">
                        <Link to='/about' className='sidebar-link'>
                            About
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to='/contact' className='sidebar-link'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <Overlay show={show} />
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onSetSelectedSubcategory: (value) => dispatch(actions.selectSubcategory(value))
    }
}

export default connect(null, mapDispatchToProps)(Sidebar)
