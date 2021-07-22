import React from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../../store/index'

function MenuDropDown({ isAuthen, onLogout }) {
    let render = null
    if (isAuthen) {
        render = (
            <Menu>
                <Menu.Item onClick={onLogout} key={0}>
                    <Link to='/'>
                        Log-out
                    </Link>
                </Menu.Item>
            </Menu>
        )
    } else {
        render = (
            <Menu>
                <Menu.Item key={0}>
                    <Link to='/sign-in'>
                        Sign-in
                    </Link>
                </Menu.Item>
                <Menu.Item key={1}>
                    <Link to='/sign-up'>
                        Sign-up
                    </Link>
                </Menu.Item>
            </Menu>
        )
    }

    return (
        <React.Fragment>
            {render}
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        isAuthen: state.token !== null
    }
}

const mapDisptachToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logOut())
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(MenuDropDown)
