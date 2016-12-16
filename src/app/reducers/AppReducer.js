import {combineReducers} from 'redux';
import filterKey from './FilterReducer';
import todos from './TodosReducer';

export default combineReducers({
	filterKey,
	todos,
});