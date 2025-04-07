import React from 'react';
import { useState } from 'react';
import { List_Types } from '../../utils/ListTypes.jsx';
import { Link } from 'react-router-dom';
import Form from '../form/Formed.jsx'
import './board.css'

const Board = (props) => {
    const {type, title, tasks, addNewTask} = props;
	const [isFormVisible, setFormVisible] = useState(false);
    const handleAddNewClick = () => {
		setFormVisible(!isFormVisible)
	}

	const formSubmit = (title, description) => {
		addNewTask(title, description, type)
		setFormVisible(false)
	}


    return (				
		<div className='full_board'>
        	<div className='task_card'>
				<h2 className='task_name'>{title}</h2>
					{tasks.length? 
						tasks.map(task =>
							<Link className='link' to={`/tasks/${task.id}`}>
								<div className='task' >{task.title}</div>
							</Link>
						
					) : 
						<p>No tasks added yet</p>
					}
					{type === List_Types.Backlog && <button onClick={handleAddNewClick} className='addButton'>+ Add new task</button>}
					{type === List_Types.Backlog && isFormVisible && (
						<Form formSubmit={formSubmit} />
						)}
					{type === List_Types.InProgress && <button onClick={handleAddNewClick} className='addButton'>+ Add new task</button>}
					{type === List_Types.InProgress && isFormVisible && (
						<Form formSubmit={formSubmit} />
						)}
					{type === List_Types.Ready && <button onClick={handleAddNewClick} className='addButton'>+ Add new task</button>}
					{type === List_Types.Ready && isFormVisible && (
						<Form formSubmit={formSubmit} />
						)}
					{type === List_Types.Done && <button onClick={handleAddNewClick} className='addButton'>+ Add new task</button>}
					{type === List_Types.Done && isFormVisible && (
						<Form formSubmit={formSubmit} />
						)}

        	</div>			
		</div>
    )
}

export default Board;