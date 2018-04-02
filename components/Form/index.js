import React from 'react';
import './index.css';

import Button from '../Button'

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<form className="todo-form">
				<input type="text" placeholder="Что нужно сделать?"/>
				<Button type="submit">Добавить</Button>
			</form>
		)
	}
}

export default Form;