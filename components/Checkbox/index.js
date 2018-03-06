import React from 'react';
import './index.css';

function Checkbox({checked, onChange}) {
	return (
			<button className='checkbox icon' onClick={onChange}>
				<i className='material-icons'> {checked ? 'check_box' : 'check_box_outline_blank'}</i>
			</button>
	);
}

export default Checkbox;