import React from "react";
import { useState } from 'react'
import { List_Types, List_Types_Show } from '../../utils/ListTypes'
import './form.css'

const Form = props => {
	const {formSubmit} = props
	const [values, setValues] = useState({
		title: '',
		description: '',
		status: List_Types.Backlog
	})

	const handleChange = e => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (values.title) {
			formSubmit(values.title, values.description, values.status)
		}
	}
	return (
		<form onSubmit={handleSubmit} className='form'>
			<input className='input' name='title' type='text' placeholder='Enter task title' onChange={handleChange} value={values.title} />
			<input className='taskDescription' name='description' placeholder='Enter task description' value={values.description} onChange={handleChange} />
			<select className='select' name='status' onChange={handleChange} value={values.status}>
				{Object.values(List_Types).map(list => {
					return <option key={list} value={list}>{List_Types_Show[list]}</option>
				})}
			</select>
			<button className='submit' type='submit'>Submit</button>
		</form>
	)
}

export default Form