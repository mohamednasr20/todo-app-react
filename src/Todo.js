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
				<div className="Todo">
					<form onSubmit={this.handleUpdate} className="Todo-edit-form">
						<input onChange={this.handleChange} value={this.state.todo} type="text" />
						<button>Save</button>
					</form>
				</div>
			);
		} else {
			result = (
				<div className="Todo">
					<li
						id={this.props.id}
						className={this.state.isCompleted ? 'Todo-task completed' : 'Todo-task'}
						onClick={this.completed}
					>
						{this.props.todo}
					</li>
					<div className="Todo-buttons">
						<button onClick={this.handleRemove}>
							<i className="fas fa-trash" />
						</button>
						<button onClick={this.handleEdit}>
							{' '}
							<i className="fas fa-pen" />
						</button>
					</div>
				</div>
			);
		}

		return result;
	}
}

export default Todo;
