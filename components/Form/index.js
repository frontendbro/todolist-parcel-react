import React from 'react';
import './index.css';

import Button from '../Button'

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};

	}

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(event);
	}

	render() {
		return (
			<form className='todo-form' onSubmit={this.handleSubmit}>
				<input type='text' placeholder='Что нужно сделать?'/>
				<Button type='submit'>Добавить</Button>
			</form>
		)
	}
}

export default Form;