import {combineReducers} from 'redux';

import user from './user.js';

const reducers = {
	user : user,
}


const reducer = combineReducers(reducers);

export default reducer;
