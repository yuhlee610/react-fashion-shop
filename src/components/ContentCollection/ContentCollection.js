import React from 'react'
import './ContentCollection.css'
import { connect } from 'react-redux'
import * as actions from '../../store/index'
import { Spin } from 'antd';
import CardItem from '../CardItem/CardItem';
import { useHistory } from 'react-router'
import "./ContentCollection.css"
import withScrollToTop from '../../hoc/ScrollToTop/ScrollToTop';

function ContentCollection({
    selectedSubcate,
    onSetSelectedSubcategory,
    listProducts,
    loading,
    gender }) {

    let subcategory = []
    if (gender === "men") {
        subcategory = ['All men', 'Shirts', 'Shorts', 'Jackets', 'Boardshorts']
    }
    else {
        subcategory = ['All women', 'Dresses', 'Jackets', 'Shirts', 'Pants']
    }

    const history = useHistory()

    const clickProductHandler = (id) => {
        history.push(`/${gender}/${id}`)
    }

    const clickSubcateHandler = (e) => {
        onSetSelectedSubcategory(e.target.innerText);
    }

    const filterProduct = listProducts.filter(ele => {
        const { sex, type } = ele
        if (sex === gender && (selectedSubcate === `All ${gender}` || selectedSubcate === null || selectedSubcate === type))
            return ele
        return false
    })

    let render = null
    if (loading) {
        render = <Spin size='large' />
    }
    else {
        render = (
            <div className="men__cards">
                {filterProduct.map(ele => {
                    const { id, image, name, price } = ele
                    return (
                        <CardItem
                            key={id}
                            id={id}
                            clickProductHandler={clickProductHandler}
                            image={image}
                            name={name}
                            price={price}
                        />
                    )
                })}
            </div>
        )
    }

    return (
        <div className='men__container'>
            <div className="men__categories">
                <ul className='list-categories'>
                    {subcategory.map((ele, index) => {
                        return (
                            <li key={index} className={(selectedSubcate === null && index === 0) ? 'active' : selectedSubcate === ele ? 'active' : null} onClick={clickSubcateHandler}>
                                {ele}
                            </li>
                        )
                    })}
                </ul>
            </div>

            {render}

        </div>
    )
}

const mapStateToProps = state => {
    return {
        selectedSubcate: state.selectedSubcategory,
        listProducts: state.listProducts,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetSelectedSubcategory: (value) => dispatch(actions.selectSubcategory(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withScrollToTop(ContentCollection))

