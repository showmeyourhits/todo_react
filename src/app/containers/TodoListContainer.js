import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import TodoList from './../components/TodoList';
import {deleteTodo, editTodo, saveTodo,
		toggleTodo, toggleAll} from './../actions/Actions';
import {filterTodos} from './../constants';


const mapStateToProps = (state, ownProps) => {
	const allComplete = state.todos.every(el => el.done) && state.todos.length > 0;
	return {
		todos: filterTodos(state.todos, state.filterKey),
		allComplete,
		editing: state.editing
	}
}
const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
	saveTodo,
	deleteTodo,
	toggleTodo,
	toggleAll
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);