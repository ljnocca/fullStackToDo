import STORE from './store.js'
import {TaskModel} from './models/taskModel.js'

var ACTIONS = {
	addTask: function(taskData){
		var newTask = new TaskModel(taskData)
		newTask.save()
			.then(
				function(response) { // SUCCESS
					ACTIONS.fetchAllTasks()
				},
				function(err) { // FAILURE
					alert('problem saving your task!')
					console.log(err)
				}
			)
	},

	toggleTask: function(){

	},

	deleteMod: function(model) {
		model.destroy()
			.done(ACTIONS.fetchAllIssues)
			.fail(
				function(err) {
					alert('problem deleting your model!')
					console.log(err)
				})
	},

	fetchAllTasks: function() {
		var taskColl = STORE.get('tasksCollection')
		taskColl.fetch()
			.then(function() {
				STORE.set({
					tasksCollection: taskColl
				})
			})
	}
}

export default ACTIONS