import React from 'react';
import './index.css';
import Checkbox from '../Checkbox/index';

function Todo({ dataTodo }) {
  return (
    <div className='todo'>
      <Checkbox checked={dataTodo.completed} />
      <div className='todo-title'> {dataTodo.title} </div>
      <button className='delete icon'>
        <i className='material-icons'>delete</i>
      </button>
    </div>
  );
}


export default Todo;
