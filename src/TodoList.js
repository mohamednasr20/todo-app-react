import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = { todoes: [] };
		this.addTodo = this.addTodo.bind(this);
		this.removeTask = this.removeTask.bind(this);
		this.updateTask = this.updateTask.bind(this);
	}

	updateTask(task, id) {
		let newTodoes = this.state.todoes.map((todo) => {
			if (todo.id === id) {
				return { ...todo, todo: task };
			}

			return todo;
		});
		this.setState({ todoes: newTodoes });
	}

	removeTask(id) {
		let newTodoes = this.state.todoes.filter((todo) => todo.id !== id);

		this.setState({ todoes: newTodoes });
	}

	addTodo(todo) {
		this.setState({ todoes: [ ...this.state.todoes, todo ] });
	}
	render() {
		const todoes = this.state.todoes.map((todo) => (
			<Todo key={todo.id} id={todo.id} todo={todo.todo} removeTask={this.removeTask} update={this.updateTask} />
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
