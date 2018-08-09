import {combineReducers} from 'redux';
import UserReducer from './reducer-user';
import ActiveUser from './reduce-active-user';

const allReducers = combineReducers({

    users:UserReducer,
    activeUser:ActiveUser
});

export default allReducers;