export const actionTypes = {
	ADD_TODO: "ADD_TODO",
	DEL_TODO: "DEL_TODO",
	TOGGLE_DONE: "TOGGLE_DONE",
	FILTER: "FILTER",
	DEL_DONE: "DEL_DONE",
	EDIT_TODO: "EDIT",
	SAVE_TODO: "SAVE",
	TOGGLE_ALL: "TOGGLE_ALL",
};

export const filters = {
	ALL: 'ALL',
	DONE: 'DONE',
	UNDONE: 'UNDONE',
};

export const isEnterKey = (ev) => {
	return ev.keyCode && ev.keyCode === 13;
}
export const isFieldEmpty = (ev) => {
	return !ev.target.value;
}

export const filterTodos = (todos, filterKey) => {
	switch(filterKey){
		case "DONE":
			return todos.filter(el => el.done);
		case "UNDONE":
			return todos.filter(el => !el.done);
		case "ALL":
		default:
			return todos;
	}
}