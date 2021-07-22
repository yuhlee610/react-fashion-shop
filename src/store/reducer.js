import * as actionTypes from './actionTypes'

const initialState = {
    listProducts: [],
    listCart: [],
    selectedSubcategory: null,
    loading: true,
    error: null,
    isSignUpSuccess: null,
    isSignInSuccess: null,
    token: null,
    userId: null,
    email: null,
    isBuySuccess: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SELECT_SUBCATEGORY:
            return {
                ...state,
                selectedSubcategory: action.value
            }

        case actionTypes.FETCH_PRODUCTS_START:
            return {
                ...state,
                loading: true
            }

        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            let arr = []
            for (const key in action.data) {
                arr.push({
                    ...action.data[key],
                    id: key
                })
            }
            return {
                ...state,
                loading: false,
                listProducts: arr
            }

        case actionTypes.FETCH_PRODUCTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.message
            }

        case actionTypes.ADD_TO_CART:
            let checkProductExist = state.listCart.find(ele => ((ele.id === action.item.id) && (ele.size === action.item.size)))
            console.log(checkProductExist)
            // CHECK PRODUCT EXIST IN CART
            if (checkProductExist) {
                // INCREASE AMOUNT IN CART
                return {
                    ...state,
                    listCart: state.listCart.map(ele => {
                        if (ele.id === action.item.id && ele.size === action.item.size) {
                            return {
                                ...ele,
                                number: ele.number + 1
                            }
                        }
                        return ele
                    })
                }
            } else {
                // ADD PRODUCT TO CART
                return {
                    ...state,
                    listCart: state.listCart.concat(action.item)
                }
            }

        case actionTypes.MODIFY_CART_NUMBER:
            let updateCart = []
            if (action.value === 0) {
                updateCart = state.listCart.filter(ele => (!(ele.id === action.id && ele.size === action.size)))
            }
            else {
                updateCart = state.listCart.map(ele => {
                    if (ele.id === action.id && ele.size === action.size) {
                        return {
                            ...ele,
                            number: action.value
                        }
                    }
                    return ele
                })
            }

            return {
                ...state,
                listCart: updateCart
            }

        case actionTypes.FETCH_CART:
            let lstCart = localStorage.getItem('cart')
            if (!lstCart) {
                return state
            }
            else {
                return {
                    ...state,
                    listCart: JSON.parse(lstCart)
                }
            }

        case actionTypes.SIGN_UP_START:
            return {
                ...state,
                loading: true
            }

        case actionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                isSignUpSuccess: true,
                loading: false
            }

        case actionTypes.SIGN_UP_FAIL:
            return {
                ...state,
                isSignUpSuccess: false,
                loading: false
            }

        case actionTypes.SIGN_UP_FINISH:
            return {
                ...state,
                isSignUpSuccess: null,
                loading: false
            }

        case actionTypes.SIGN_IN_START:
            return {
                ...state,
                loading: true
            }

        case actionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                isSignInSuccess: true,
                loading: false,
                token: action.token,
                userId: action.userId,
                email: action.email
            }

        case actionTypes.SIGN_IN_FAIL:
            return {
                ...state,
                isSignInSuccess: false,
                loading: false
            }

        case actionTypes.SIGN_IN_FINISH:
            return {
                ...state,
                isSignInSuccess: null
            }

        case actionTypes.LOG_OUT:
            return {
                ...state,
                token: null,
                userId: null,
                email: null
            }

        case actionTypes.BUY_START:
            return {
                ...state,
                loading: true
            }

        case actionTypes.BUY_SUCCESS:
            return {
                ...state,
                isBuySuccess: true,
                loading: false
            }

        case actionTypes.BUY_FAIL:
            return {
                ...state,
                isBuySuccess: false,
                loading: false
            }

        case actionTypes.BUY_FINISH:
            return {
                ...state,
                isBuySuccess: null,
                listCart: []
            }

        default:
            return state
    }
}

export default reducer