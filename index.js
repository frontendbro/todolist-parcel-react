import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './index.css';
import data from './data';
import Todo from './components/Todo';
import Header from './components/Header';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: this.props.data
		}
	}

	handleStatusChange = (id) => {
		let todos = this.state.todos.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});
		this.setState({todos});
	};

	handleDelete = (id) => {
		let todos = this.state.todos.filter(todo => todo.id !== id);
		this.setState({todos});
	};

	render() {
		return (
				<div className='App'>
					<img className='App-Logo' src={logo} alt='React Logo'/>
					<div className='wrapper'>
						<Header/>
						<section className='todo-list'>
							{this.state.todos.map(todo => (
									<Todo
											key={todo.id}
											id={todo.id}
											title={todo.title}
											completed={todo.completed}
											onStatusChange={this.handleStatusChange}
											onDelete={this.handleDelete}
									/>
							))}
						</section>
					</div>
				</div>
		);
	}
}

ReactDOM.render(<App data={data}/>, document.getElementById('root'));
