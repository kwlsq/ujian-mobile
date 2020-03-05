import { GET_ZOMATO_SUCCESS } from "../Actions/types";
const INTIAL_STATE = []

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case GET_ZOMATO_SUCCESS:
            return action.payload
        default:
            return state
    }
}