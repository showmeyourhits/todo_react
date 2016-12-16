import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import TodoList from './../components/TodoList';
import {editTodo} from './../actions/Actions';

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
	const allComplete = state.todos.every(el=>el.done) && state.todos.length > 0;
	return {
		todos: filterTodos(state.todos, state.filterKey),
		allComplete,
	}
}
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onDoubleClick: (id) => {
			dispatch(editTodo(id));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);