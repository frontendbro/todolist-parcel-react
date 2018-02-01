import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './index.css';
import data from './data';

class App extends React.Component{
	constructor(props){
		super(props);

	}

	render(){
		return(
			<div className="App">
				<img className="App-Logo" src={logo} alt="React Logo" />
				<div className="wrapper">
					<header>
						<h1>ToDoList Parcel React</h1>
					</header>
					<section className="todo-list">
						{this.props.data.map((todo, i) => (
							<div className="todo" key={i}>
								<button className="checkbox icon">
									<i className="material-icons">check_box_outline_blank</i>
								</button>
								<div className="todo-title">{todo.title}</div>
								<button className="delete icon">
									<i className="material-icons">delete</i>
								</button>
							</div>
						))}
					</section>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App data={data}/>, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
	module.hot.accept();
}
