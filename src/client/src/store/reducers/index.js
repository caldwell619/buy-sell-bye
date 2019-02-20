
import { combineReducers } from 'redux';
import fetchUser from './fetchUser';

//defines global store state
export default combineReducers({
    user: fetchUser,
})
