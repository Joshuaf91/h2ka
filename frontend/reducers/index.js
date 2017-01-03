import {combineReducers} from 'redux';

import user from './user.js';
import blog from './blog.js';
import pdf from './pdf.js';

const reducers = {
	user,
	blog,
	pdf,
}


const reducer = combineReducers(reducers);

export default reducer;
