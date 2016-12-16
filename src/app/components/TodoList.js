import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

export default function({todos, allComplete, onDoubleClick}){
	const todoList = <Todo title="ass" onDoubleClick={onDoubleClick}/> || todos.map(el => <Todo {...el}/>) ;

	return (
		<div>
			<label htmlFor="toggleAll">
				<input type='checkbox' defaultChecked={allComplete} />
				Mark all complete.
			</label>
			<ul>
				{todoList}
			</ul>
		</div>
		);
}