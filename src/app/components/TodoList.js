import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

export default function({todos, allComplete, handleEdit, handleSave, 
	handleRemove, handleToggle, handleToggleAll}){
	
	const todoList = todos.map(el => 
		<Todo 
			handlers={{handleEdit, handleSave, handleRemove, handleToggle}} 
			key={el.id} {...el}
			/>) ;

	return (
		<div>
			<label htmlFor="toggleAll">
				<input 
					type='checkbox' 
					onChange={ev => handleToggleAll(ev.target.checked)} 
					defaultChecked={allComplete} />
				Mark all complete.
			</label>
			<ul>
				{todoList}
			</ul>
		</div>
		);
}