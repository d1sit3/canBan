import React from 'react';
import Board from '../board/Board';
import { List_Types, List_Types_Show } from '../../utils/ListTypes';
import uniqid from 'uniqid';
import './card.css'

const Card = (props) => {
    const {tasks, setTasks} = props;
    const addNewTask = (title, description, status) => {
		const task = {
			id: uniqid(),
			title,
			description,
			created: new Date().toISOString(),
			status: status,
		}

		setTasks([...tasks, task]);
	}

	return (
        <div className='cards_background'>
		<div className='card_wrapper'>
		{
			Object.values(List_Types).map(type => {
				const listTasks = tasks.filter(task => task.status === type)
				return (
					<Board
						key={List_Types_Show[type]}
						type={type}
						title={List_Types_Show[type]}
						tasks={listTasks || []}
						addNewTask={addNewTask}
					/>
				)
			})
		}
		</div>
        </div>
	)
}



export default Card;