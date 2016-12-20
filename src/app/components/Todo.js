import React from 'react';
import ReactDOM from 'react-dom';

import {isEnterKey, isFieldEmpty} from './../constants';


class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {editing: false};
	}

	render() {
		return (
			<li className={"todo " + (this.state.editing ? 'todo--editing ' : '') 
				+ (this.props.done ? 'todo--completed ' : '')}
				onDoubleClick={() => {
					this.setState({editing: true});
				}}>
				
				<div className="todo__content">

					<input type='checkbox' checked={this.props.done} 
						onChange={ev => this.props.handlers.toggleTodo(this.props.id)}/>
					
					<span className='todo__title' >{this.props.title}</span>
					
					<button 
						className='todo__remove' 
						onClick={ev => this.props.handlers.deleteTodo(this.props.id)}>X</button>
				
				</div>
				<input type='text' placeholder='Rename your TODO'
					className='todo__edit'
					onBlur={ev => {
						if (!isFieldEmpty(ev)){
							this.props.handlers.saveTodo(this.props.id, ev.target.value);
							this.setState({editing: false});
						}
					}}
					onKeyDown={ev => {
						if (!isFieldEmpty(ev) && isEnterKey(ev)){
							this.props.handlers.saveTodo(this.props.id, ev.target.value);
							this.setState({editing: false});
						}
					}}
					defaultValue={this.props.title}/>
			</li>);
	}
}

export default Todo;