import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

export default function({todos, editing,  allComplete, saveTodo, 
	deleteTodo, toggleTodo, toggleAll}){
	
	const todoList = todos.map(el => 
		<Todo 
			handlers={{saveTodo, deleteTodo, toggleTodo}} 
			key={el.id} {...el}
			/>) ;

	return (
		<div>
			<label htmlFor="toggleAll" className={todos.length ? "" : "hide"}>
				<input 
					type='checkbox' 
					onChange={ev => toggleAll(ev.target.checked)} 
					checked={allComplete} />
				Mark all complete.
			</label>
			<ul className='todo-list'>
				{todoList}
			</ul>
		</div>
		);
}