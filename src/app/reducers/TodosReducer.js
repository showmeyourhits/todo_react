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
			return todos.map((todo) => {
				//create new?
				todo.checked = action.value;
				return todo;
			});

		case actionTypes.TOGGLE:
			return todos.map((todo)=>{
				if (todo.id === action.id){
					todo.checked = !todo.checked;
					return todo;
				}
			});

		case actionTypes.DEL_DONE:
			return todos.filter(todo => todo.checked);

		case actionTypes.EDIT_TODO:
			console.log("tryin to edit huh");
			return todos;

		case actionTypes.SAVE_TODO:
			console.log("tryin to save");
			return todos;
			
		default:
			return todos;
	}
};