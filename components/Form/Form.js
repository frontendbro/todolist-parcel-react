import React from 'react';
import './index.css';

import Button from '../Button/Button'

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: ''
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		let title = this.state.title;
		if (title) {
			this.props.onAdd(title);
			this.setState({title: ''});
		}
	};

	handleChange = (event) => {
		let title = event.target.value;
		this.setState({title});
	};

	render() {
		return (
			<form className='todo-form' onSubmit={this.handleSubmit}>
				<input type='text' value={this.state.value} placeholder='Что нужно сделать?' onChange={this.handleChange}/>
				<Button type='submit'>Добавить</Button>
			</form>
		)
	}
}

export default Form;