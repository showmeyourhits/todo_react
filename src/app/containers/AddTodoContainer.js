import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import AddTodo from './../components/AddTodo';

const mapStateToProps = (state, ownProps) => {
	return {};
}
const mapDispatchToProps = () => {
	return {}
}

export default connect(mapStateToProps, null)(AddTodo);