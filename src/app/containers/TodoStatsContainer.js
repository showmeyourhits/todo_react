import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import TodoStats from './../components/TodoStats';
import {filterList, deleteDone} from './../actions/Actions';

const mapStateToProps = (state, ownProps) => {
	const undone = state.todos.filter(el => !el.done).length,
		done = state.todos.length - undone;
	return {
		undone,
		done,
		filterKey: state.filterKey,
	};
};
const mapDispatchToProps = (dispatch) => bindActionCreators({
	filterList,
	deleteDone
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoStats);
