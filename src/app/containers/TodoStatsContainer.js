import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import TodoStats from './../components/TodoStats';

import {filterList, deleteDone} from './../actions/Actions';

const mapStateToProps = (state, ownProps) => {
	return {
		undone: state.todos.filter(el => !el.done).length,
		filterKey: state.filterKey,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		handleFilter: (filterKey) => {
			dispatch(filterList(filterKey));
		},
		handleDeleteDone: () => {
			dispatch(deleteDone());
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoStats);
