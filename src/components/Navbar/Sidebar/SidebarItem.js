import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'

function SidebarItem({ gender, subcategories, clickSubcateHandler }) {
    const [showSubmenu, setShowSubmenu] = useState(false)

    return (
        <li className="sidebar-item" onClick={() => setShowSubmenu(!showSubmenu)}>
            <div className='sidebar-link' style={{ textTransform: "capitalize" }}>
                {gender}
                <span className="arrow">
                    <IoIosArrowDown />
                </span>
            </div>

            <ul className={`submenu ${showSubmenu && 'active'}`}>
                {
                    subcategories.map((ele, index) => {
                        return (
                            <li onClick={clickSubcateHandler} key={index}>
                                <Link to={`/${gender}`}>
                                    {ele}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </li>
    )
}

export default SidebarItem
