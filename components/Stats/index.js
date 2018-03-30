import React from 'react';
import './index.css';

function Stats({todos}) {
	let total = todos.length;
	let completed = todos.filter( todo => todo.completed).length;
	let notCompleted = total - completed;
	return (
			<table>
				<tbody>
					<tr>
						<th>Всего задач:</th>
						<td>{total}</td>
					</tr>
					<tr>
						<th>Выполнено:</th>
						<td>{completed}</td>
					</tr>
					<tr>
						<th>Осталось:</th>
						<td>{notCompleted}</td>
					</tr>
				</tbody>
			</table>
		);
}

export default Stats;