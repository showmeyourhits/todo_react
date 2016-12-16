import {actionTypes, filters} from './../constants';

export default (prevState = filters.ALL, action) => {
	switch (action.type){
		case actionTypes.FILTER:
			return action.filterKey;
		default:
			return prevState;
	};
};