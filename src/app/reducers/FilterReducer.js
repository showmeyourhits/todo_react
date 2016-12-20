import {handleActions} from 'redux-actions';

import {actionTypes, filters} from './../constants';

const initialState = filters.ALL;

export default handleActions({
	[actionTypes.FILTER]: (state, action) => {
		return action.payload;
	}
}, initialState);
