import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'
import Overlay from '../../Overlay/Overlay';
import './Search.css'
import {withRouter} from 'react-router-dom'

function Search({history}) {
    const [showSearchBox, setShowSearchBox] = useState(false);
    const [searchValue, setSearchValue] = useState('')

    const searchHandler = () => {
        setShowSearchBox(false)
        history.push('/search/' + searchValue)
    }

    return (
        <div className='menu-search'>
            <div className="menu-search__icon" onClick={() => setShowSearchBox(true)}>
                <FiSearch />
            </div>
            <div className={`search-box ${showSearchBox ? 'active' : null}`}>
                <div className="icon--search" onClick={searchHandler}>
                    <FiSearch />
                </div>
                <input type="text" placeholder='Search our store' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                <div className="icon--close" onClick={() => setShowSearchBox(false)}>
                    <IoMdClose />
                </div>
            </div>
            <Overlay show={showSearchBox}/>
        </div>
    )
}

export default withRouter(Search)
