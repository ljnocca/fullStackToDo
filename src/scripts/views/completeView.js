import React from 'react'
import TaskForm from './components/taskForm.js'
import STORE from '../store.js'
import ACTIONS from '../actions.js'
import Banner from './components/banner.js'


const DoneView = React.createClass({
	componentWillMount: function(){
		ACTIONS.fetchTasksByUser(this.props.userId)
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
		console.log(this.state.tasksCollection)
		return(
			<div>
				<Banner />
				<h1>YOUR COMPLETE TASKS</h1>
				<Tasks tasksCollection={this.state.tasksCollection.where({done:true})} />
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
	handleDelete: function(){
		ACTIONS.deleteMod(this.props.taskModel)
	},

	render: function(){
		return(
			<div className="completeTask">

				<h3>{this.props.taskModel.get('task')}</h3>
				<button className="delete" onClick={this.handleDelete}> Delete Task </button>
			</div>
		)
	}
})

export default DoneView