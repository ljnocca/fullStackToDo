import React from 'react'
import TaskForm from './components/taskForm.js'
import STORE from '../store.js'
import ACTIONS from '../actions.js'
import Banner from './components/banner.js'


const TaskView = React.createClass({
	componentWillMount: function(){
		ACTIONS.fetchAllTasks()
		STORE.on('dataUpdated', ()=> {
			this.setState(STORE.data)
		})
	},
	componentWillUnmount:function(){
		STORE.off('dataUpdated')
    },
	getInitialState: function() {
		return STORE.data
	},
	
	render: function(){
		return(
			<div>
				<Banner />
				<TaskForm />
				<h1>ALL TASKS</h1>
				<Tasks tasksCollection={this.state.tasksCollection} />
			</div>
		)
	}
})

var Tasks = React.createClass({
	createTasks: function(model){
		return <Task 
				taskModel={model} 
				key={model.cid} 
				/>
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
		ACTIONS.toggleTask(this.props.taskModel)
	},
	handleDelete: function(){
		ACTIONS.deleteMod(this.props.taskModel)
	},

	render: function(){
		console.log(this.props.taskModel)
		return(
			<div className="allTask">
				<h3>{this.props.taskModel.get('task')}</h3>
				<p className="poster-name">
					posted by <b>{this.props.taskModel.get('userName')}</b>
				</p>
				<button className="delete" onClick={this.handleDelete}> Delete Task </button>
			</div>
		)
	}
})

export default TaskView