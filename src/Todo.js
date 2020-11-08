import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = { todo: this.props.todo, id: this.props.id, isEditing: false, isCompleted: false };
		this.handleRemove = this.handleRemove.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.completed = this.completed.bind(this);
	}

	handleUpdate(e) {
		e.preventDefault();
		this.props.update(this.state.todo, this.props.id);
		this.setState({ isEditing: !this.state.isEditing });
	}

	handleRemove() {
		this.props.removeTask(this.props.id);
	}

	handleChange(e) {
		this.setState({ todo: e.target.value });
	}

	handleEdit() {
		this.setState({ isEditing: !this.state.isEditing });
	}

	completed() {
		this.setState({ isCompleted: !this.state.isCompleted });
	}
	render() {
		let result;
		if (this.state.isEditing) {
			result = (
				<div>
					<form onSubmit={this.handleUpdate}>
						<input onChange={this.handleChange} value={this.state.todo} type="text" />
						<button>Save</button>
					</form>
				</div>
			);
		} else {
			result = (
				<li id={this.props.id}>
					<div className={this.state.isCompleted ? 'completed' : ''} onClick={this.completed}>
						{this.props.todo}
					</div>
					<button onClick={this.handleRemove}>X</button>
					<button onClick={this.handleEdit}>edit</button>
				</li>
			);
		}

		return result;
	}
}

export default Todo;
