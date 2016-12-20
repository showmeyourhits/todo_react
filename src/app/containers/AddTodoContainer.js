import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {addTodo} from './../actions/Actions';
import AddTodo from './../components/AddTodo';

const mapStateToProps = (state, ownProps) => {
	return {};
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
	addTodo,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);