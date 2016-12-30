import {combineReducers} from 'redux';

import user from './user.js';
import blog from './blog.js';

const reducers = {
	user,
	blog,
}


const reducer = combineReducers(reducers);

export default reducer;
