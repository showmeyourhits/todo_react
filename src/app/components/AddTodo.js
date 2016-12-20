import React from 'react';
import ReactDOM from 'react-dom';

import {isEnterKey, isFieldEmpty} from './../constants';


export default function({addTodo}){
	const handleInput = (ev) => {
		if (!isFieldEmpty(ev) && isEnterKey(ev)){
			console.log(ev.target.value);
			addTodo(ev.target.value);
			ev.target.value = "";
		}
	};
	return (
		<input className="add-todo" type="text" placeholder="Whatcha gonna do" onKeyDown={handleInput}/>
		);
}