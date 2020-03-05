import {
    INPUT_TEXT,
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS
} from '../Actions/types'

const INITIAL_STATE = {
    user: '',
    authchecked: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INPUT_TEXT:
            return { user: action.payload }
        case USER_LOGIN_SUCCESS:
            return { user: action.payload, authchecked: true }
        case USER_LOGIN_FAIL:
            return { ...state, authchecked: true }
        default:
            return state
    }
}
