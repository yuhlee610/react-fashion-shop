import { Form, Input, Select, Button, Modal, Result } from 'antd';
import React, { useEffect, useState } from 'react'
import './Checkout.css'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/index'

const { Option } = Select;

const Checkout = ({ listCart, isAuthen, onBuy, listProducts, isBuySuccess, loading, onBuyFinish, email }) => {
    const [style1, setStyle1] = useState(null)
    const [style2, setStyle2] = useState(null)
    const [clickHeader, setClickHeader] = useState(false)
    const [showHeader, setShowHeader] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false);

    const onFinish = values => {
        onBuy(values, listCart, listProducts)
    }

    const resizeHandler = () => {
        if (window.innerWidth < 590) {
            if (style1 !== null && style2 !== null) {
                setStyle1(null)
                setStyle2(null)
            }
        } else {
            if (style1 === null && style2 === null) {
                setStyle1({ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px 12px 0' })
                setStyle2({ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 0 12px 8px' })
            }
        }

        if (window.innerWidth <= 1080) {
            if (showHeader === false) {
                setShowHeader(true)
            }
        }
        else {
            if (showHeader === true) {
                setShowHeader(false)
            }
        }
    }

    useEffect(() => {
        resizeHandler()
    }, [])

    useEffect(() => {
        if (isBuySuccess !== null) {
            setIsModalVisible(true)
        }
    }, [isBuySuccess])

    window.addEventListener('resize', resizeHandler)

    const total = listCart.reduce((total, item) => {
        return total + item.price * item.number
    }, 0)

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleClose = () => {
        onBuyFinish()
    }


    if (!isAuthen) {
        return <Redirect to='/' />
    }

    return (
        <div className='checkout__container'>
            <Modal title="Notification" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} afterClose={handleClose}>
                {
                    isBuySuccess ?
                        <Result
                            status="success"
                            title="Successfully Buy"
                        />
                        :
                        <Result
                            status="error"
                            title="Buy Failed"
                        />
                }
            </Modal>
            <div className="checkout__info">
                <Form layout='vertical' size='large' onFinish={onFinish}>
                    <div className="label">Contact information</div>
                    <Form.Item label={null} name='email' rules={[{ required: true, message: 'Email is required', type: 'email' }]}>
                        <Input placeholder='Email here' defaultValue={email} />
                    </Form.Item>

                    <div className="label">Shipping address</div>

                    <Form.Item label={null}>
                        <Form.Item
                            name='firstName'
                            rules={[{ required: true, message: 'First name is required' }]}
                            style={style1}
                        >
                            <Input placeholder='First name' />
                        </Form.Item>
                        <Form.Item
                            name='lastName'
                            rules={[{ required: true, message: 'Last name is required' }]}
                            style={style2}
                        >
                            <Input placeholder='Last name' />
                        </Form.Item>
                    </Form.Item>

                    <Form.Item label={null}>
                        <Form.Item
                            name='company'
                        >
                            <Input placeholder='Company' />
                        </Form.Item>
                    </Form.Item>

                    <Form.Item label={null}>
                        <Form.Item
                            name='address'
                            rules={[{ required: true }]}
                        >
                            <Input placeholder='Address' />
                        </Form.Item>
                    </Form.Item>

                    <Form.Item label={null}>
                        <Form.Item
                            name='apartment'
                        >
                            <Input placeholder='Apartment, suite, etc.' />
                        </Form.Item>
                    </Form.Item>

                    <Form.Item label={null}>
                        <Form.Item
                            name='city'
                            rules={[{ required: true }]}
                        >
                            <Input placeholder='City' />
                        </Form.Item>
                    </Form.Item>

                    <Form.Item label={null}>
                        <Form.Item
                            name='country'
                            style={style1}
                        >
                            <Select placeholder="Select country">
                                <Option value="Viet Nam">Viet Nam</Option>
                                <Option value="My">My</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name='postal'
                            style={style2}
                        >
                            <Input placeholder="Postal code" />
                        </Form.Item>
                    </Form.Item>

                    <Form.Item label={null}>
                        <Form.Item
                            name='phone'
                        >
                            <Input placeholder='Phone' />
                        </Form.Item>
                    </Form.Item>

                    <Form.Item label={null} colon={false}>
                        <Button type="primary" htmlType="submit" style={{ height: '2.8rem', width: '6rem', fontSize: '1rem' }} loading={loading}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className="checkout__detail">
                {
                    showHeader ? (
                        <div className="detail__header" onClick={() => setClickHeader(pre => !pre)}>
                            <div>Show order summary <span>{!clickHeader ? <IoIosArrowDown /> : <IoIosArrowUp />}</span></div>
                            <p>${total + 20}</p>
                        </div>
                    ) :
                        null
                }

                <div className={`checkout__body ${clickHeader && 'active'}`}>
                    {
                        listCart.map(ele => {
                            const { image, name, size, price, number, id } = ele
                            return (
                                <div className="checkout__product" id={id + size}>
                                    <img src={image} alt="" />
                                    <div className="info">
                                        <div>{name}</div>
                                        <p>Size: {size}</p>
                                        <p>x{number}</p>
                                    </div>
                                    <div className="price">${price}</div>
                                </div>
                            )
                        })
                    }
                    <div className="underline"></div>
                    <div className="subtotal">
                        <div>Subtotal</div>
                        <p>${total}</p>
                    </div>
                    <div className="shipping">
                        <div>Shipping</div>
                        <p>$20</p>
                    </div>
                    <div className="underline"></div>
                    <div className="total">
                        <div>Total</div>
                        <p>${total + 20}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        listCart: state.listCart,
        isAuthen: state.token !== null,
        listProducts: state.listProducts,
        loading: state.loading,
        isBuySuccess: state.isBuySuccess,
        email: state.email
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onBuy: (userInfo, listCart, listProducts) => dispatch(actions.buyProduct(userInfo, listCart, listProducts)),
        onBuyFinish: () => dispatch(actions.buyProductFinish())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
