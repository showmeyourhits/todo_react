import React from 'react';
import ReactDOM from 'react-dom';

import {isEnterKey, isFieldEmpty} from './../constants';


export default function({handleAddTodo}){
	const handleInput = (ev) => {
		if (!isFieldEmpty(ev) && isEnterKey(ev)){
			handleAddTodo(ev.target.value);
			ev.target.value = "";
		}
	};
	return (
		<input type="text" placeholder="Whatcha gonna do" onKeyDown={handleInput}/>
		);
}