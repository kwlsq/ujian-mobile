import axios from 'axios';
import { GET_ZOMATO_SUCCESS, GET_ZOMATO_DETAIL } from "../Actions/types";


export const getZomato = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('https://developers.zomato.com/api/v2.1/search?start=1&count=10&sort=rating', {
                headers: {
                    "user-key": "74b25737566cc5cfe2644bcdf3265f8e"
                }
            })
            console.log('res.data', res.data.restaurants)
            dispatch({
                type: GET_ZOMATO_SUCCESS,
                payload: res.data.restaurants
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const zomatoDetail = (item) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: GET_ZOMATO_DETAIL,
                payload: { ...item }
            })
        } catch (err) {
            console.log(err)
        }
    }
}