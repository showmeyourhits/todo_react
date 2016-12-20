import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';

import TodoApp from './app/containers/TodoApp';
import App from './app/reducers/AppReducer';


const store = createStore(App, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), autoRehydrate());

persistStore(store);

ReactDOM.render(
	(<Provider store={store}>
		<TodoApp />
	</Provider>),
	document.getElementById("todoapp")
	);

window.Store = store;