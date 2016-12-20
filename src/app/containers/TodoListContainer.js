import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import TodoList from './../components/TodoList';
import {deleteTodo, editTodo, saveTodo, toggleTodo, toggleAll} from './../actions/Actions';


const filterTodos = (todos, filterKey) => {
	switch(filterKey){
		case "DONE":
			return todos.filter(el => el.done);
		case "UNDONE":
			return todos.filter(el => !el.done);
		case "ALL":
		default:
			return todos;
	}
}


const mapStateToProps = (state, ownProps) => {
	const allComplete = state.todos.every(el => el.done) && state.todos.length > 0;
	return {
		todos: filterTodos(state.todos, state.filterKey),
		allComplete,
		editing: state.editing
	}
}
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleEdit: (id) => {
			dispatch(editTodo(id));
		},
		
		handleSave: (id, newTitle) => {
			dispatch(saveTodo(id, newTitle));
		},
		
		handleRemove: (id) => {
			dispatch(deleteTodo(id));
		},
		
		handleToggle: (id) => {
			dispatch(toggleTodo(id));
		},
		
		handleToggleAll: (value) => {
			dispatch(toggleAll(value));
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);