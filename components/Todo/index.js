import React from 'react';
import './index.css';
import Checkbox from '../Checkbox';
import Button from '../Button';

function Todo({ dataTodo }) {
	return (
		<div className={`todo${dataTodo.completed ? ' completed' : ' '}`}>
			<Checkbox checked = { dataTodo.completed } />
			<div className = 'todo-title'> { dataTodo.title } </div>
			<Button className = 'delete button' icon='delete'/>
		</div>
	);
}

export default Todo;
