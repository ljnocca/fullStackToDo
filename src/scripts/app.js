import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

import TaskView from './views/taskView.js'
import DoneView from './views/completeView.js'
import UndoneView from './views/incompleteView.js'
import LoginPage from './views/loginPage.js'

const app = function() {
	var TaskRouter = Backbone.Router.extend({
		routes:{
			'tasks/all': 'showAllTasks',
			'tasks/done/user/:id': 'showDoneTasks',
			'tasks/undone/user/:id': 'showUndoneTasks',
			'login': 'showLoginPage',
			'*default': 'handleRedirect'
		},
		handleRedirect: function(){
		},
		showAllTasks: function(){
			ReactDOM.render(<TaskView />, document.querySelector('.container'))
		},
		showDoneTasks: function(id){
			ReactDOM.render(<DoneView  userId={id} />, document.querySelector('.container'))

		},
		showUndoneTasks: function(id){
			ReactDOM.render(<UndoneView userId={id} />, document.querySelector('.container'))
		},
		showLoginPage: function(){
			ReactDOM.render(<LoginPage />, document.querySelector('.container'))
		}
	})
	new TaskRouter
	Backbone.history.start()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..