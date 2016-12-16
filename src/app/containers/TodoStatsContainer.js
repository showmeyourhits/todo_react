import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import TodoStats from './../components/TodoStats';

const mapStateToProps = (state, ownProps) => {
	return {
		undone: state.todos.filter(el => !el.done).length
	};
};
const mapDispatchToProps = () => {

};

export default connect(mapStateToProps, null)(TodoStats);
