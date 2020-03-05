import { combineReducers } from 'redux';
import userReducer from './userReducer';
import zomatoReducer from './zomatoReducer';
import zomatoDetailReducer from './zomatoDetailReducer';

export default combineReducers({
    username: userReducer,
    zomato: zomatoReducer,
    detail: zomatoDetailReducer
})