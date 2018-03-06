import React from 'react';
import './index.css';
import Checkbox from '../Checkbox';
import Button from '../Button';

function Todo({id, title, completed, onStatusChange, onDelete}) {
	return (
			<div className={`todo${ completed ? ' completed' : ' '}`}>
				<Checkbox checked={completed} onChange={() => onStatusChange(id)}/>
				<div className='todo-title'> {title} </div>
				<Button className='delete button' icon='delete' onClick={() => onDelete(id)}/>
			</div>
	);
}

export default Todo;
