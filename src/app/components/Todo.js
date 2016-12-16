import React from 'react';
import ReactDOM from 'react-dom';

function Todo({id, done, title, onDoubleClick}){
	return (
		<li onDoubleClick={id => onDoubleClick(id)}>
			<input type='checkbox' checked={done}/>
			<span>{title}</span>
			<button>X</button>
			<input type='text' placeholder='Rename your TODO'/>
		</li>
		);
};

export default Todo;