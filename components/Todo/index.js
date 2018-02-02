import React from 'react';

function Todo({dataTodo}) {
	return(
		<div className="todo">
			<button className="checkbox icon">
				<i className="material-icons">check_box_outline_blank</i>
			</button>
			<div className="todo-title">{dataTodo.title}</div>
			<button className="delete icon">
				<i className="material-icons">delete</i>
			</button>
		</div>
	)
};

export default Todo;