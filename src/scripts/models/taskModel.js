import Backbone from 'backbone'

export var Task = Backbone.Model.extend({
	defaults:{
		taskDescription: '',
		done: false
	}
})

export var TasksCollection = Backbone.Collection.extend({
	model: Task
})