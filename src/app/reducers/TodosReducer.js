import {handleActions} from 'redux-actions';
import uuidV4 from 'uuid/v4';

import {actionTypes} from './../constants';

const initialState = [];

export default handleActions({
	[actionTypes.ADD_TODO]: (todos, action) => [...todos, {
		title: action.payload,
		done: false,
		id: uuidV4(),
	}],

	[actionTypes.DEL_TODO]: (todos, action) => todos.filter(todo => todo.id !== action.payload),

	[actionTypes.TOGGLE_DONE]: (todos, action) => todos.map(todo => {
		if (todo.id === action.payload){
			return {
				id: todo.id,
				done: !todo.done,
				title: todo.title,
			};
		}else{
			return todo;
		}
	}),

	[actionTypes.TOGGLE_ALL]: (todos, action) => todos.map((todo) => ({
		id: todo.id,
		done: action.payload,
		title: todo.title,
	})),

	[actionTypes.DEL_DONE]: (todos) => todos.filter(todo => !todo.done),

	[actionTypes.SAVE_TODO]: (todos, action) => todos.map((todo) => {
		if (todo.id === action.payload.id){
			return {
				id: todo.id,
				done: todo.done,
				title: action.payload.newTitle,
			};
		}else{
			return todo;
		}
	}),
}, initialState);
