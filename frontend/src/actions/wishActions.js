import axios from 'axios'
import {WISH_ADD_ITEM, WISH_REMOVE_ITEM} from '../constants/wishConstants'

export const addToWish = (id) => async(dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)
    dispatch( {
        type: WISH_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.Name,
            image: data.Image_URL_1,
            price: data.Price,
            countInStock : data.Quantity, 
        }
    } )

    localStorage.setItem('wishItems', JSON.stringify(getState().wish.wishItems))
}

export const removeFromWish = (id) => (dispatch, getState) => {
    dispatch({
        type: WISH_REMOVE_ITEM,
        payload: id,
    })
    localStorage.setItem('wishItems', JSON.stringify(getState().wish.wishItems))
}