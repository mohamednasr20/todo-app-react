import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css';

class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { todo: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const newTodo = { ...this.state, id: uuidv4() };
		this.props.addTodo(newTodo);
		this.setState({ todo: '' });
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	render() {
		return (
			<form className="NewTodoForm" onSubmit={this.handleSubmit}>
				<label htmlFor="todo">New Todo</label>
				<input type="text" value={this.state.todo} name="todo" onChange={this.handleChange} />
				<button>Add Todo</button>
			</form>
		);
	}
}

export default NewTodoForm;
