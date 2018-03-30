import React from 'react';
import './index.css';

import Stats from '../Stats/';

function Header({todos}) {
	return(
		<header className='todoHeader'>
			<Stats todos={todos}/>
			<h1>ToDoList Parcel React</h1>
		</header>
	)
}

export default Header;