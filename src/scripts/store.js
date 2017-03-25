import Backbone from 'backbone'
import {TasksCollection} from './models/taskModel.js'

var STORE = Object.assign({}, Backbone.Events, {
	data:{
		tasksCollection: new TasksCollection()
	},

	_initialize: function() {
		this.data.tasksCollection.on('update change', this.broadcastChange.bind(this))
	},

	broadcastChange: function() {
		this.trigger('dataUpdated')
	},

	set: function(attributes) {
		this.data = Object.assign(this.data, attributes)
		this.trigger('dataUpdated')
	}
})

STORE._initialize()
export default STORE