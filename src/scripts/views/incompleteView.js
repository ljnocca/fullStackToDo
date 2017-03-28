import React from 'react'
import TaskForm from './components/taskForm.js'
import STORE from '../store.js'
import ACTIONS from '../actions.js'
import Navigation from './components/navigation.js'

const UndoneView = React.createClass({
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
		console.log(this.state.tasksCollection)
		return(
			<div>
				<Navigation />
				<h1>INCOMPLETE TASKS</h1>
				<Tasks tasksCollection={this.state.tasksCollection.where({done:false})} />
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
		return(
			<div className="incompleteTask">

				<h3>{this.props.taskModel.get('task')}</h3>
				<button className="toggleStatus" onClick={this.toggleComplete}> Task Complete </button>
				<button className="delete" onClick={this.handleDelete}> Delete Task </button>
			</div>
		)
	}
})


export default UndoneView