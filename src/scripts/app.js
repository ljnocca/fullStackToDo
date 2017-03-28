import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

import TaskView from './views/taskView.js'
import DoneView from './views/completeView.js'
import UndoneView from './views/incompleteView.js'


const app = function() {
	var TaskRouter = Backbone.Router.extend({
		routes:{
			'allTasks': 'showAllTasks',
			'done': 'showDoneTasks',
			'undone': 'showUndoneTasks',
			'*default': 'handleRedirect'
		},
		showAllTasks: function(){
			ReactDOM.render(<TaskView />, document.querySelector('.container'))
		},
		showDoneTasks: function(){
			ReactDOM.render(<DoneView />, document.querySelector('.container'))

		},
		showUndoneTasks: function(){
			ReactDOM.render(<UndoneView />, document.querySelector('.container'))

		},
		handleRedirect: function(){
			location.hash = 'allTasks'
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