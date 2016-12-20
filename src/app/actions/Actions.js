import {actionTypes} from './../constants';

import {createAction} from 'redux-actions';


export const addTodo = createAction(actionTypes.ADD_TODO);

export const deleteTodo = createAction(actionTypes.DEL_TODO);

export const toggleTodo = createAction(actionTypes.TOGGLE_DONE);

export const filterList = createAction(actionTypes.FILTER);

export const deleteDone = createAction(actionTypes.DEL_DONE);

export const toggleAll = createAction(actionTypes.TOGGLE_ALL);

export const editTodo = createAction(actionTypes.EDIT_TODO);

export const saveTodo  = createAction(actionTypes.SAVE_TODO,
	(id, newTitle) => ({id, newTitle}));
