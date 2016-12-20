import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import {addTodo} from './../actions/Actions';
import AddTodo from './../components/AddTodo';

const mapStateToProps = (state, ownProps) => {
	return {};
}
const mapDispatchToProps = (dispatch) => {
	return {
		handleAddTodo: (newTitle) => {
			dispatch(addTodo(newTitle));
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);