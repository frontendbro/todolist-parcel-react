import React from 'react';
import './index.css';


function Button({className, icon}) {
	return(
		<button className={className}>
			<i className='material-icons'>{icon}</i>
		</button>
	);
}

export default Button;