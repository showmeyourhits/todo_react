import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';

import TodoApp from './app/containers/TodoApp';
import App from './app/reducers/AppReducer';

require('./app/styles/todo_app.scss');
require('./app/styles/add_todo.scss');
require('./app/styles/todo_list.scss');
require('./app/styles/todo_stats.scss');


const store = createStore(App, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), autoRehydrate());

persistStore(store);

ReactDOM.render(
	(<Provider store={store}>
		<TodoApp />
	</Provider>),
	document.getElementById("todoapp")
	);

window.Store = store;