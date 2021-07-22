import * as actionTypes from './actionTypes'
import axios from '../axios'

// SELECT SUBCATEGORY
export const selectSubcategory = (value) => {
    return {
        type: actionTypes.SELECT_SUBCATEGORY,
        value: value
    }
}

// FETCH DATA
export const fetchProducts = () => {
    return dispatch => {
        dispatch(fetchProductsStart())
        axios.get('/products.json')
            .then(data => {
                dispatch(fetchProductsSuccess(data.data))
            })
            .catch(error => {
                dispatch(fetchProductsFail(error.message))
            })
    }
}

const fetchProductsStart = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_START
    }
}

const fetchProductsSuccess = (data) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        data: data
    }
}

const fetchProductsFail = (message) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAIL,
        message: message
    }
}

// FETCH CART
export const fetchCart = () => {
    return {
        type: actionTypes.FETCH_CART
    }
}

// ADD TO CART
export const addToCart = item => {
    return {
        type: actionTypes.ADD_TO_CART,
        item: item
    }
}

// MODIFY CART NUMBER
export const modifyCartNumber = (id, value, size) => {
    return {
        type: actionTypes.MODIFY_CART_NUMBER,
        id: id,
        value: value,
        size: size
    }
}

// SIGN UP
export const signUp = (email, password) => {
    return dispatch => {
        dispatch(signUpStart())
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC2oK01JOuhFkmchTvYEyoYDrmBnDXAa6w'
        axios.post(url, authData)
            .then(response => {
                dispatch(signUpSuccess())
            })
            .catch(err => {
                dispatch(signUpFail())
            })
    }
}

const signUpStart = () => {
    return {
        type: actionTypes.SIGN_UP_START
    }
}

const signUpSuccess = () => {
    return {
        type: actionTypes.SIGN_UP_SUCCESS
    }
}

const signUpFail = () => {
    return {
        type: actionTypes.SIGN_UP_FAIL
    }
}

export const signUpFinish = () => {
    return {
        type: actionTypes.SIGN_UP_FINISH
    }
}

// SIGN IN
export const signIn = (email, password) => {
    return dispatch => {
        dispatch(signInStart())
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC2oK01JOuhFkmchTvYEyoYDrmBnDXAa6w'
        axios.post(url, authData)
            .then(response => {
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)
                localStorage.setItem('token', response.data.idToken)
                localStorage.setItem('expirationDate', expirationDate)
                localStorage.setItem('userId', response.data.localId)
                localStorage.setItem('email', response.data.email)
                dispatch(signInSuccess(response.data.idToken, response.data.localId, response.data.email))
                dispatch(checkTimeOut(response.data.expiresIn))
            })
            .catch(error => {
                dispatch(signInFail())
            })
    }
}

export const signInFinish = () => {
    return {
        type: actionTypes.SIGN_IN_FINISH
    }
}

const signInStart = () => {
    return {
        type: actionTypes.SIGN_IN_START
    }
}

const signInSuccess = (token, userId, email) => {
    return {
        type: actionTypes.SIGN_IN_SUCCESS,
        token: token,
        userId: userId,
        email: email
    }
}

const signInFail = () => {
    return {
        type: actionTypes.SIGN_IN_FAIL
    }
}

const checkTimeOut = (expire) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logOut())
        }, expire * 1000)
    }
}

export const logOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('userId')
    localStorage.removeItem('email')
    return {
        type: actionTypes.LOG_OUT
    }
}

export const checkLoginState = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        if (!token) {
            dispatch(logOut())
        }
        else {
            const expiration = new Date(localStorage.getItem('expirationDate'))
            if (expiration > new Date()) {
                const userId = localStorage.getItem('userId')
                const email = localStorage.getItem('email')
                dispatch(signInSuccess(token, userId, email))
                dispatch(checkTimeOut((expiration.getTime() - new Date().getTime()) / 1000))
            }
            else {
                dispatch(logOut())
            }
        }
    }
}

// BUY PRODUCT
export const buyProduct = (userInfo, listCart, listProducts) => {
    let distincId = [...new Set(listCart.map(ele => ele.id))].map(ele => { return { id: ele, number: 0 } })
    distincId.forEach(ele => {
        listCart.forEach(item => {
            if (ele.id === item.id) {
                ele.number += item.number
            }
        })
    })

    let filterPro = listProducts.filter(ele => {
        return distincId.find(item => item.id === ele.id)
    })

    filterPro.forEach(ele => {
        distincId.forEach(item => {
            ele.amount = ele.amount - item.number
        })
    })

    return dispatch => {
        dispatch(buyProductStart())
        axios.post('/orders.json', { ...userInfo, product: distincId })
            .then(response => {
                dispatch(buyProductSuccess())
            })
            .catch(error => {
                dispatch(buyProductFail())
            })

        filterPro.forEach(ele => {
            let arr = { ...ele }
            delete arr.id
            axios.put(`/products/${ele.id}.json`, { ...arr })
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
        })
    }
}

const buyProductStart = () => {
    return {
        type: actionTypes.BUY_START
    }
}

const buyProductSuccess = () => {
    return {
        type: actionTypes.BUY_SUCCESS
    }
}

const buyProductFail = () => {
    return {
        type: actionTypes.BUY_FAIL
    }
}

export const buyProductFinish = () => {
    return {
        type: actionTypes.BUY_FINISH
    }
}