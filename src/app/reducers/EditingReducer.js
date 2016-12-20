import {actionTypes} from './../constants';


export default (editing = null, action) => {
	switch (action.type){
		case actionTypes.EDIT_TODO:
			return action.id;

		case actionTypes.SAVE_TODO:
			console.log("in editing reducer");
			return null;
			
		default:
			return editing;
	}
};