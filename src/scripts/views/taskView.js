import React from 'react'
import TaskForm from './components/taskForm.js'
import STORE from '../store.js'
import ACTIONS from '../actions.js'
import Navigation from './components/navigation.js'

const TaskView = React.createClass({
	componentWillMount: function(){
		ACTIONS.fetchAllTasks()
		STORE.on('dataUpdated', ()=> {
			this.setState(STORE.data)
		})
	},
	getInitialState: function() {
		return STORE.data
	},
	
	render: function(){
		return(
			<div>
				<Navigation />
				<TaskForm />
				<Tasks tasksCollection={this.state.tasksCollection} />
			</div>
		)
	}
})

var Tasks = React.createClass({
	createTasks: function(model){
		return <Task taskModel={model} key={model.cid} />
	},
	render: function(){
		return(
			<div className="tasks">
				{this.props.tasksCollection.map(this.createTasks)}
			</div>
		)
	}
})

var Task = React.createClass({
	toggleComplete: function(){
		{this.props.taskModel.get('done') ? 'complete' : 'incomplete'}
	},
	handleDelete: function(){
		ACTIONS.deleteMod(this.props.taskModel)
	},

	render: function(){
		console.log(this.props.taskModel)
		return(
			<div className="task">
				<h4>{this.props.taskModel.get('task')}</h4>
				<button onClick={this.toggleComplete}> Task Complete </button>
				<button onClick={this.handleDelete}> Delete Task </button>
			</div>
		)
	}
})

export default TaskView