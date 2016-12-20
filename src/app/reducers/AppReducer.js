import {combineReducers} from 'redux';

import filterKey from './FilterReducer';
import todos from './TodosReducer';
import editing from './EditingReducer';

export default combineReducers({
	filterKey,
	todos,
	editing
});