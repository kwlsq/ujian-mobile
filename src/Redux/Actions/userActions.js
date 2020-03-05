import {
    INPUT_TEXT,
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS
} from './types'
import AsyncStorage from '@react-native-community/async-storage';

export const onInputText = (value) => {
    return {
        type: INPUT_TEXT,
        payload: value
    }
}

export const onUserLogin = (username) => {
    console.log(username)
    return async (dispatch) => {
        try {
            await AsyncStorage.setItem('username', username)
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: username
            })
        } catch (err) {
            dispatch({ type: USER_LOGIN_FAIL })
        }
    }
}

export const loginCheck = () => {
    return async (dispatch) => {
        try {
            const token = await AsyncStorage.getItem('username')
            if (!token) {
                return dispatch({ type: USER_LOGIN_FAIL })
            }

            console.log('async store ada isinya, langsung redirect')
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: token
            })
        } catch (err) {
            dispatch({ type: USER_LOGIN_FAIL })
        }
    }
}

export const onUserLogout = () => {
    return async (dispatch) => {
        await AsyncStorage.removeItem('username')
        dispatch({ type: USER_LOGIN_FAIL })
    }
}