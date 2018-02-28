import React from 'react';
import './index.css';
import Checkbox from '../Checkbox';
import Button from '../Button';

function Todo({ title, completed }) {
	return (
		<div className={`todo${ completed ? ' completed' : ' '}`}>
			<Checkbox checked = { completed } />
			<div className = 'todo-title'> { title } </div>
			<Button className = 'delete button' icon='delete'/>
		</div>
	);
}

export default Todo;
