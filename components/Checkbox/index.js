import React from 'react';
import './index.css';

function Checkbox({checked}) {
	return (
		<button className = 'checkbox icon'>
			<i className = 'material-icons'> { checked ? 'check_box' : 'check_box_outline_blank' }</i>
		</button>
	);
}

export default Checkbox;