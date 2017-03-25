import React from 'react'
import Navigation from './components/navigation.js'
import STORE from '../store.js'
import ACTIONS from '../actions.js'

const TaskView = React.createClass({
	componentWillMount: function(){

		STORE.on('dataUpdated', ()=> {
			this.setState(STORE.data)
		})
	},
	getInitialState: function() {
		return STORE.data
	},
	_handleSubmit: function(event){
		event.preventDefault()
		var newTask = event.target.task.value
		ACTIONS.addTask(newTask)
		event.target.reset()
	},
	render: function(){
		return(
			<div>
				<Navigation />
				<form onSubmit={this._handleSubmit}>
					<input name='task' placeholder='enter new task...' />
					<button id='submit'>Submit</button>
				</form>
				<Tasks tasks={this.state.tasksCollection} />
			</div>
		)
	}
})

var Tasks = React.createClass({
	createTasks: function(){
		return this.props.tasks.map((task) => {
			return <Task
			key = {task.cid}
			task = {task}
			/>
		})
	},
	render: function(){
		return(
			<div className="tasks">
				{this.createTasks()}
			</div>
		)
	}
})

var Task = React.createClass({
	render: function(){
		return(
			<div className="task">
				<h4>{this.props.task.get('taskDescription')}</h4>
				<button>Task Complete/Incomplete</button>
			</div>
		)
	}
})

export default TaskView