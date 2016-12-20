import React from 'react';
import ReactDOM from 'react-dom';
import AddTodoContainer from './AddTodoContainer';
import TodoListContainer from './TodoListContainer';
import TodoStatsContainer from './TodoStatsContainer';

function TodoApp(){
	return (
		<div>
			<h3 className='todo-app__title'>Reactive Todo</h3>
			<AddTodoContainer />
			<TodoListContainer />
			<TodoStatsContainer />
		</div>
	);
}

export default TodoApp;