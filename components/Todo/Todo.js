import React from 'react';
import './index.css';
import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';

class Todo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			editing: false
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		let title = this.refs.title.value;

		this.props.onEdit(this.props.id, title);
		this.setState({editing: false});
	};

	renderDisplay = () => {
		return(
			<div className={`todo${ this.props.completed ? ' completed' : ' '}`}>
				<Checkbox checked={this.props.completed} onChange={() => this.props.onStatusChange(this.props.id)}/>
				<div className='todo-title'> {this.props.title} </div>
				<Button className='edit button' icon='edit' onClick={ () => this.setState({editing: true})}/>
				<Button className='delete button' icon='delete' onClick={() => this.props.onDelete(this.props.id)}/>
			</div>
		);
	};

	renderForm = () => {
		return(
			<form className='todo-edit-form' onSubmit={this.handleSubmit}>
				<input type='text' ref='title' defaultValue={this.props.title}/>
				<Button className='save button' icon='save' type='submit'/>
			</form>
		);
	};

	render() {
		return this.state.editing ? this.renderForm() : this.renderDisplay();
	}
}


export default Todo;
