import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = { todoes: [] };
		this.addTodo = this.addTodo.bind(this);
	}

	handleClick(id) {
		this.removeTodo(id);
	}

	removeTodo(id) {
		let newTodoes = this.state.todoes.filter((todo) => todo.id !== id);

		this.setState({ todoes: newTodoes });
	}

	addTodo(todo) {
		this.setState({ todoes: [ ...this.state.todoes, todo ] });
	}
	render() {
		const todoes = this.state.todoes.map((todo) => (
			<li key={todo.id} id={todo.id}>
				{todo.todo} <button onClick={() => this.handleClick(todo.id)}>X</button>
			</li>
		));
		return (
			<div>
				<h1>Todo List!</h1>
				<ul>{todoes}</ul>
				<NewTodoForm addTodo={this.addTodo} />
			</div>
		);
	}
}

export default TodoList;
