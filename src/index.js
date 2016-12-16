import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import TodoApp from './app/containers/TodoApp';
import App from './app/reducers/AppReducer';



const store = createStore(App);

ReactDOM.render(
	(<Provider store={store}>
		<TodoApp />
	</Provider>),
	document.getElementById("todoapp")
	);
