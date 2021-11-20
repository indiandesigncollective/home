import axios from 'axios'
import {CART_ADD_ITEM} from '../constants/cartConstants'

export const addToCart = (id, qty) => async(dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch( {
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.Name,
            image: data.Image_URL_1,
            price: data.Price,
            countInStock : data.Quantity, qty
        }
    } )

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}