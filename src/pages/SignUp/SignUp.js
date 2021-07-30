import React, { useEffect, useState } from 'react'
import './SignUp.css'
import { Form, Input, Button, Modal, Result } from 'antd';
import * as actions from '../../store/index'
import { connect } from 'react-redux'
import {useHistory} from 'react-router-dom'

function SignUp({ onSignup, onSignupFinish, loading, isSignUpSuccess }) {
    const [checkRes, setCheckRes] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const history = useHistory()

    useEffect(() => {
        if (isSignUpSuccess !== null) {
            setIsModalVisible(true)
        }
    }, [isSignUpSuccess])

    const handleOk = () => {
        onSignupFinish()
        setIsModalVisible(false);
        history.push('/sign-in')
    };

    const handleCancel = () => {
        onSignupFinish()
        setIsModalVisible(false);
    };

    const handleClose = () => {
        onSignupFinish()
    }

    const resizeHandler = () => {
        if (window.innerWidth <= 574) {
            setCheckRes(true)
        } else {
            setCheckRes(false)
        }
    }

    useEffect(() => {
        resizeHandler()
    }, [])

    window.addEventListener('resize', resizeHandler)

    const submitRegisterHandler = ({ username, password }) => {
        console.log(username, password)
        onSignup(username, password)
    }

    return (
        <div className='account__container'>
            <Modal title="Notification" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} afterClose={handleClose}>
                {
                    isSignUpSuccess ?
                        <Result
                            status="success"
                            title="Successfully Sign Up"                         
                        />
                        :
                        <Result
                            status="error"
                            title="Sign Up Failed"                         
                        />
                }
            </Modal>
            <h2>SIGN UP </h2>
            <Form
                name="basic"
                labelCol={{
                    span: 5,
                }}
                wrapperCol={{
                    span: 16
                }}
                onFinish={submitRegisterHandler}
            >
                <Form.Item
                    label="Mail"
                    name="username"
                    rules={[
                        {
                            required: true,
                            type: 'email',
                            message: 'Please input your mail!',
                        },
                    ]}
                >
                    <Input size='large' />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Password must be at least 6 characters!',
                            min: 6
                        },
                    ]}
                >
                    <Input.Password size='large' />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: checkRes ? 0 : 5,
                        span: 24,
                    }}
                >
                    <Button style={{ padding: '1.2rem 1.2rem', display: 'flex', alignItems: 'center' }} type="primary" htmlType="submit" loading={loading}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>

        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onSignup: (email, password) => dispatch(actions.signUp(email, password)),
        onSignupFinish: () => dispatch(actions.signUpFinish())
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        isSignUpSuccess: state.isSignUpSuccess
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
