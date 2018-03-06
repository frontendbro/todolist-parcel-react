import React from 'react';
import './index.css';


function Button({className, icon, onClick}) {
	return (
			<button className={className} onClick={onClick}>
				<i className='material-icons'>{icon}</i>
			</button>
	);
}

export default Button;