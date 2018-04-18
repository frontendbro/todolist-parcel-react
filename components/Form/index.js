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
		let title = this.refs.title.value;
		if (title) {
			this.props.onAdd(title);
			this.refs.title.value = '';
		}
	};

	render() {
		return (
			<form className='todo-form' onSubmit={this.handleSubmit}>
				<input type='text' ref='title' placeholder='Что нужно сделать?'/>
				<Button type='submit'>Добавить</Button>
			</form>
		)
	}
}

export default Form;