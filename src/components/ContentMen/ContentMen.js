import React from 'react'
import './ContentMen.css'
import { connect } from 'react-redux'
import * as actions from '../../store/index'
import { useHistory } from 'react-router';
import { Spin } from 'antd';
import CardItem from '../CardItem/CardItem';

function ContentMen({ selectedSubcate, onSetSelectedSubcategory, listProducts, loading }) {
    const subcategory = ['All men', 'Shirts', 'Shorts', 'Jackets', 'Boardshorts']
    const history = useHistory()

    const clickProductHandler = (id) => {
        history.push('/men/' + id)
    }

    const clickSubcateHandler = (e) => {
        onSetSelectedSubcategory(e.target.innerText);
    }

    const filterProduct = listProducts.filter(ele => {
        const { sex, type } = ele
        if ((selectedSubcate === 'All men' || selectedSubcate === null) && sex === 'men') {
            return ele
        }
        else if (selectedSubcate === type && sex === 'men') {
            return ele
        } else {
            return false
        }
    })

    let render = null
    if (loading) {
        render = <Spin size='large' />
    }
    else {
        render = (
            <div className="men__cards">
                {
                    filterProduct.map(ele => {
                        const { id, image, name, price } = ele
                        return (
                            <CardItem 
                                id={id}
                                clickProductHandler={clickProductHandler}
                                image={image}
                                name={name}
                                price={price}
                            />
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div className='men__container'>
            <div className="men__categories">
                <ul className='list-categories'>
                    {
                        subcategory.map((ele, index) => {
                            return (
                                <li key={index} className={(selectedSubcate === null && index === 0) ? 'active' : selectedSubcate === ele ? 'active' : null} onClick={clickSubcateHandler}>
                                    {ele}
                                </li>
                            )
                        })
                    }
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

export default connect(mapStateToProps, mapDispatchToProps)(ContentMen)
