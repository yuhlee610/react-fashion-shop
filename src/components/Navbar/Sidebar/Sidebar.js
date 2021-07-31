import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import { IoMdClose } from 'react-icons/io'
import Overlay from '../../Overlay/Overlay'
import { connect } from 'react-redux'
import * as actions from '../../../store/index'
import SidebarItem from './SidebarItem'

const menSubcategory = ['All men', 'Shirts', 'Shorts', 'Jackets', 'Boardshorts']
const womenSubcategory = ['All women', 'Dresses', 'Jackets', 'Shirts', 'Pants']

function Sidebar({ show, showHandler, onSetSelectedSubcategory }) {
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
                    {['men', 'women'].map((g, index) => (
                        <SidebarItem
                            key={index}
                            gender={g}
                            subcategories={g === "men" ? menSubcategory : womenSubcategory}
                            clickSubcateHandler={clickSubcateHandler}
                        />)
                    )}

                    {["about", "contact"].map((ele, index) => (
                        <li className="sidebar-item" key={index}>
                            <Link to={`/${ele}`} className='sidebar-link' style={{ textTransform: "capitalize" }}>
                                {ele}
                            </Link>
                        </li>
                    ))}
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
