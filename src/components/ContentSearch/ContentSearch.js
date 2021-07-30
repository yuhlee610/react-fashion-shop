import React, { useState } from 'react'
import { connect } from 'react-redux'
import './ContentSearch.css'
import Search from 'antd/lib/input/Search'
import { Spin } from 'antd'
import "../ContentCollection/ContentCollection.css"

function ContentSearch({ match, listProducts, loading }) {
    const [searchValue, setSearchValue] = useState(match.params.name)

    const onSearch = value => {
        setSearchValue(value)
    }

    let filterArr = listProducts.filter(ele => {
        return ele.name.toLowerCase().includes(searchValue.toLowerCase())
    })

    let render = null
    if (loading) {
        render = <Spin size='large'/>
    }
    else {
        render = (
            filterArr.map(ele => {
                const {id, image, name, price} = ele
                return (
                    <div className="card-item" key={id}>
                        <div className="card__img">
                            <img src={image} alt="" />
                        </div>
                        <p>{name}</p>
                        <div>${price}</div>
                    </div>
                )
            })
        )
    }

    return (
        <div className='search__container'>
            <h2>Search</h2>
            <Search placeholder="Search our store" type='pr' size='large' defaultValue={searchValue} onSearch={onSearch} enterButton/>
            <div className="underline"></div>
            <h2>3 results</h2>
            <div className="search__products">
                {render}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        listProducts: state.listProducts
    }
}

export default connect(mapStateToProps, null)(ContentSearch)
