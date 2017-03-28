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
	deleteMod: function(model) {
		model.destroy()
			.done(ACTIONS.fetchAllTasks)
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
	},
	toggleTask: function(model){
		model.set({
			done: model.get('done') ? 'complete' : 'incomplete'
		})
		model.save()
			.done(function(resp){
				console.log(resp)
				ACTIONS.fetchAllTasks()
			})
			.fail(function(err){
				alert("couldn't update your task status")
				console.log(err)
			})
	}
}

export default ACTIONS