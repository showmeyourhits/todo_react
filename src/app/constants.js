const actionTypes = {
	ADD: "ADD",
	DEL: "DEL",
	TOGGLE: "TOGGLE",
	FILTER: "FILTER",
	DEL_DONE: "DEL_DONE",
	EDIT_TODO: "EDIT",
	SAVE_TODO: "SAVE",
	TOGGLE_ALL: "TOGGLE_ALL",
};

const filters = {
	ALL: 'ALL',
	DONE: 'DONE',
	UNDONE: 'UNDONE',
};

const isEnterKey = (ev) => {
	return ev.keyCode && ev.keyCode === 13;
}
const isFieldEmpty = (ev) => {
	return !ev.target.value;
}

export {actionTypes, filters, isEnterKey, isFieldEmpty};
