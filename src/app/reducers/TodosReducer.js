import uuidV4 from 'uuid/v4';

import {actionTypes} from './../constants';


export default (todos = [], action) => {
	switch (action.type){
		case actionTypes.ADD:
			return [...todos, {
				title: action.title,
				done: false,
				id: uuidV4(),
			}];
			
		case actionTypes.DEL:
			return todos.filter((todo)=>{
				return todo.id !== action.id;
			})
			
		case actionTypes.TOGGLE_ALL:
			return todos.map((todo) => ({
				id: todo.id,
				done: action.value,
				title: todo.title,
			}));

		case actionTypes.TOGGLE:
			return todos.map((todo) => {
				if (todo.id === action.id){
					return {
						id: todo.id,
						done: !todo.done,
						title: todo.title,
					};
				}else{
					return todo;
				}
			});

		case actionTypes.DEL_DONE:
			return todos.filter(todo => !todo.done);

		case actionTypes.SAVE_TODO:
			return todos.map((todo) => {
				if (todo.id === action.id){
					return {
						id: todo.id,
						done: todo.done,
						title: action.newTitle,
					};
				}else{
					return todo;
				}
			});
			
		default:
			return todos;
	}
};