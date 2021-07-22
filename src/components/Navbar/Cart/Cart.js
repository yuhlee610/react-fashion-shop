import React, { useState } from 'react'
import './Cart.css'
import { BiShoppingBag } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'
import { Button, Modal } from 'antd';
import Overlay from '../../Overlay/Overlay'
import { connect } from 'react-redux'
import * as actions from '../../../store/index'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import CartItem from './CartItem';
import { useHistory } from 'react-router-dom'


function Cart({ isAuthen, listCart, onModifyCartNumber }) {
    const [showCart, setShowCart] = useState(false);
    const history = useHistory()

    const subtotal = listCart.reduce((total, item) => {
        return total + item.price * item.number
    }, 0)

    const changeCartNumberHandler = (value, { id, size }) => {
        onModifyCartNumber(id, value, size)
    }

    window.addEventListener('unload', () => {
        localStorage.setItem('cart', JSON.stringify(listCart))
    })

    const lstItem = listCart.map(ele => {
        const { image, id, name, size, price, amount, number } = ele
        return (
            <CSSTransition key={id + size} classNames='fade' timeout={300}>
                <CartItem
                    image={image}
                    name={name}
                    size={size}
                    amount={amount}
                    number={number}
                    id={id}
                    price={price}
                    changeCartNumberHandler={changeCartNumberHandler}
                />
            </CSSTransition>
        )
    })

    const checkOutHandler = () => {
        if (!isAuthen) {
            Modal.warning({
                title: 'Warning',
                content: 'Login is required!!!',
            });
        }
        else {
            history.push('/checkout')
            setShowCart(false)
        }
    }

    return (
        <div className='cart'>
            <div className="cart-icon" onClick={() => setShowCart(true)}>
                <BiShoppingBag />
            </div>

            <div className={`cart__side-bar ${showCart && 'active'}`}>
                <div className="cart__header">
                    <div>Cart</div>
                    <div className="cart__close" onClick={() => setShowCart(false)}>
                        <IoMdClose />
                    </div>
                </div>
                <TransitionGroup component='div' className='cart__body'>
                    {lstItem}
                </TransitionGroup>

                <div className="cart__footer">
                    <div className="subtotal">
                        <div>SUBTOTAL</div>
                        <p>${subtotal}</p>
                    </div>
                    <Button
                        type="primary"
                        style={{ background: '#000' }}
                        className='btn-check-out'
                        onClick={checkOutHandler}
                    >
                        Check out
                    </Button>
                </div>
            </div>

            <Overlay show={showCart} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        listCart: state.listCart,
        isAuthen: state.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onModifyCartNumber: (id, number, size) => dispatch(actions.modifyCartNumber(id, number, size))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
