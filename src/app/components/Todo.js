import React from 'react';
import ReactDOM from 'react-dom';

import {isEnterKey, isFieldEmpty} from './../constants';

function Todo({id, done, title, handlers}){
	const saveTodo = (newTitle) => {
		handlers.handleSave(id, newTitle);
	}
	return (
		<li onDoubleClick={ev => handlers.handleEdit(id)}>
			<input type='checkbox' checked={done} onChange={ev => handlers.handleToggle(id)}/>
			<span>{title}</span>
			<button onClick={ev => handlers.handleRemove(id)}>X</button>
			<input type='text' placeholder='Rename your TODO' 
				onBlur={ev => {
					if (!isFieldEmpty(ev)){
						saveTodo(ev.target.value);
					}
				}}
				onKeyDown={ev => {
					if (!isFieldEmpty(ev) && isEnterKey(ev)){
						saveTodo(ev.target.value);
					}
				}}/>
		</li>
		);
};

export default Todo;