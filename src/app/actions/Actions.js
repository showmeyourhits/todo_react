import {actionTypes} from './../constants';

export const addTodo = (title) => {
	return {
		type: actionTypes.ADD,
		title,
	}
}

export const deleteTodo = (id) => {
	return {
		type: actionTypes.DEL,
		id,
	}
}

export const toggleTodo = (id) => {
	return {
		type: actionTypes.TOGGLE,
		id,
	}
}

export const filterList = (filterKey) => {
	return {
		type: actionTypes.FILTER,
		filterKey,
	}
}

export const deleteDone = () => {
	return {
		type: actionTypes.DEL_DONE,
	}
}

export const toggleAll = (value) => {
	return {
		type: actionTypes.TOGGLE_ALL,
		value,
	}
}

export const editTodo = (id) => {
	return {
		type: actionTypes.EDIT_TODO,
		id,
	}
}

export const saveTodo  = (id, newTitle) => {
	return {
		type: actionTypes.SAVE_TODO,
		id,
		newTitle,
	}
}
