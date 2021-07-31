import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'
import SubmenuCard from './SubmenuCard/SubmenuCard';

function NavbarItem({ gender, subcategories, onSetSelectedSubcategory, cards }) {
    const clickSubcateHandler = (e) => {
        onSetSelectedSubcategory(e.target.innerText);
    }

    return (
        <li className="nav-item">
            <Link
                to={`/${gender}`}
                className='nav-link nav-link--men'
                onClick={() => onSetSelectedSubcategory(`All ${gender}`)}
            >
                {gender}
                <span className="arrow">
                    <IoIosArrowDown />
                </span>
            </Link>

            <div className="nav__submenu nav__submenu--men">
                <ul className="submenu__list">
                    {
                        subcategories.map((ele, index) => (
                            <li onClick={clickSubcateHandler} key={index}>
                                <Link to={`/${gender}`} className='nav__submenu-link'>
                                    {ele}
                                </Link>
                            </li>
                        ))
                    }
                </ul>

                {
                    cards.map((ele, index) => (
                        <SubmenuCard key={index} {...ele}/>
                    ))
                }
            </div>
        </li>
    )
}

export default NavbarItem
