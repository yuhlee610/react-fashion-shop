import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Modal, Result } from 'antd';
import * as actions from '../../store/index'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import "../SignUp/SignUp.css"
import withAuth from '../../hoc/withAuth/withAuth';

function SignIn({ loading, onSignin, onSigninFinish, isSignInSuccess, checkResize }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const history = useHistory()

    useEffect(() => {
        if (isSignInSuccess !== null) {
            setIsModalVisible(true)
        }
    }, [isSignInSuccess])

    const submitLoginHandler = ({ username, password }) => {
        onSignin(username, password)
    }

    const handleOk = () => {
        onSigninFinish()
        setIsModalVisible(false);
        if (isSignInSuccess) {
            history.push('/')
        }
    };

    const handleCancel = () => {
        onSigninFinish()
        setIsModalVisible(false);
    }; 

    const handleClose = () => {
        onSigninFinish()
    }

    return (
        <div className='account__container'>
            <Modal title="Notification" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} afterClose={handleClose}>
                {
                    isSignInSuccess ?
                        <Result
                            status="success"
                            title="Successfully Sign In"
                        />
                        :
                        <Result
                            status="error"
                            title="Sign In Failed"
                        />
                }
            </Modal>
            <h2>SIGN IN </h2>
            <Form
                name="basic"
                labelCol={{
                    span: 5,
                }}
                wrapperCol={{
                    span: 16
                }}
                onFinish={submitLoginHandler}
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
                            message: 'Please input your password!'
                        },
                    ]}
                >
                    <Input.Password size='large' />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: checkResize ? 0 : 5,
                        span: 24,
                    }}
                    style={{ marginBottom: '0.5rem' }}>
                    <Link to='/sign-up' style={{ fontSize: '1rem', color: '#000' }}>Create an account</Link>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: checkResize ? 0 : 5,
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
        onSignin: (email, password) => dispatch(actions.signIn(email, password)),
        onSigninFinish: () => dispatch(actions.signInFinish())
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        isSignInSuccess: state.isSignInSuccess
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withAuth(SignIn, 574))
