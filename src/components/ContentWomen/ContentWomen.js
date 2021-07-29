import React from 'react'
import './ContentWomen.css'
import { connect } from 'react-redux'
import * as actions from '../../store/index'
import { Spin } from 'antd'
import CardItem from '../CardItem/CardItem';
import withAux from '../../hoc/MyAux/MyAux';

function ContentWomen({ selectedSubcate, onSetSelectedSubcategory, listProducts, loading, subcategory, clickProductHandler }) {

    const clickSubcateHandler = (e) => {
        onSetSelectedSubcategory(e.target.innerText);
    }


    const filterProduct = listProducts.filter(ele => {
        const { sex, type } = ele
        if ((selectedSubcate === 'All women' || selectedSubcate === null) && sex === 'women') {
            return ele
        }
        else if (selectedSubcate === type && sex === 'women') {
            return ele
        }
        else {
            return false
        }
    })

    let render = null
    if (loading) {
        render = <Spin size='large'/>
    }
    else {
        render = (
            <div className="women__cards">
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
        <div>
            <div className='women__container'>
                <div className="women__categories">
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

export default connect(mapStateToProps, mapDispatchToProps)(withAux(ContentWomen, "women"))

