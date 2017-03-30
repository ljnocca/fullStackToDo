import STORE from './store.js'
import {TaskModel} from './models/taskModel.js'
import User from './models/userModel.js'

var ACTIONS = {
	addTask: function(taskData){
		taskData.userName = User.getCurrentUser().get('name')
		taskData.userId = User.getCurrentUser().get('_id')
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
	fetchTasksByUser: function(inputId) {
		var taskColl = STORE.get('issueCollection')
		taskColl.fetch({
			data: {
				userId: inputId
				} 
		})
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
	},
	fetchTasksByUser: function(inputId) {
		var taskColl = STORE.get('tasksCollection')

		taskColl.fetch({
			data: {
				userId: inputId
				} 
		})
			.then(function() {
				STORE.set({
					tasksCollection: taskColl
				})
			})
	},

	logout: function() {
		User.logout()
			.done(
				function(resp) {
					alert('you logged out!')
					location.hash = 'login'
				})
			.fail(
				function(err) {
					alert('error logging out!')
					console.log(err)
				})
	},

	logUserIn: function(email,password) {
		User.login(email,password)
			.done(
				function(resp) {
					alert('logged in!')
					console.log(resp)
					location.hash = 'tasks/all'
				}
			)
			.fail(
				function(err) {
					alert('problem logging in!')
					console.log(err)
				})
	},
	registerUser: function(userData) {
		User.register(userData)
			.done(
				function(resp) {
					alert(`new user ${resp.email} registered`)
					console.log(resp)
					ACTIONS.logUserIn(userData.email, userData.password)
				}
				)
			.fail(
				function(err) {
					alert('problem registering user!')
					console.log(err)
				}
				)
	}
}

export default ACTIONS