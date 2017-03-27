import React from 'react'
import ACTIONS from '../../actions.js'

var TaskForm = React.createClass({
	_handleSubmit: function(eventObj){
		event.preventDefault()
		var formEl = eventObj.target
		var taskData = {
			task: formEl.task.value
		}
		console.log(taskData)
		formEl.reset()
		ACTIONS.addTask(taskData)
	},

	render: function(){
		return(
			<form onSubmit={this._handleSubmit}>
				<input name='task' placeholder='enter new task...' />
				<button type='submit'>Add my task!</button>
			</form>
		)
	}
})

export default TaskForm