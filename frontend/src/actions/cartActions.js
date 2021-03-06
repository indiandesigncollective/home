import axios from 'axios'
import {CART_ADD_ITEM, CART_REMOVE_ITEM, CART_RESET, CART_SAVE_SHIPPING_ADDRESS} from '../constants/cartConstants'

export const addToCart = (id, qty) => async(dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)
    dispatch( {
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.Name,
            image: data.Image_URL_1,
            price: data.Price,
            countInStock : data.Quantity, 
            qty
        }
    } )

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
export const resetCart = () => (dispatch) => {
    localStorage.removeItem('cartItems')
    dispatch({ type: CART_RESET })
}

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data,
    })
    localStorage.setItem('shippingAddress', JSON.stringify(data))
}