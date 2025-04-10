import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import {ReactComponent as Close} from '../../img/Line 2.svg'
import './task.css'


const TaskDetail = ({ tasks, setTasks }) => {

	const { taskId } = useParams();
	const task = JSON.parse(window.localStorage.getItem('tasks')).find(task => task.id === taskId)
  
	const [description, setDescription] = useState(task.description ? task.description : 'This task has no description');
  
	const addDescription = () => {
	  const tasksCopy = tasks.map(el => {
		if (el.id === task.id) {
		  el.description = description
		}
		return el
	  })
	  setTasks(tasksCopy);
	}
  
	return (
	  <div className='details_wrapper' >
		{task ? (<>
		  <div className='details_header'>
			<h2 className='details_title'>{task.title}</h2>
			<Link to='/'>
			  <Close className='close_btn' />
			</Link>
		  </div>
		  <textarea
			className='details_description'
			onChange={(e) => { setDescription(e.target.value) }}
			onFocus={() => { description === 'This task has no description' && setDescription('') }}
			onBlur={addDescription}
			value={description} />
			</>
		) : (<div className='details_not_found' >
		  <h2 className='details_title'>Task with ID {taskId} not found</h2>
		  <Link to='/'>
			<Close className='close_btn' />
		  </Link>
		</div>
		)
		}
	  </div >
	);
  }

  export default TaskDetail;
