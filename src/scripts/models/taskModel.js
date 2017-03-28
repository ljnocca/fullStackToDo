import Backbone from 'backbone'

export var TaskModel = Backbone.Model.extend({
	urlRoot: '/api/tasks',
	idAttribute: '_id'
})

export var TasksCollection = Backbone.Collection.extend({
	comparator: function(mod) {
		return new Date(mod.get('createdAt')).getTime() * -1
	},
	model: TaskModel,
	url: '/api/tasks'
})