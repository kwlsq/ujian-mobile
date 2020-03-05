import { GET_ZOMATO_DETAIL } from "../Actions/types";
const INTIAL_STATE = []

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case GET_ZOMATO_DETAIL:
            return action.payload
        default:
            return state
    }
}