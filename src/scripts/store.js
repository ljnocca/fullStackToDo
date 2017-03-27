import Backbone from 'backbone'
import {TasksCollection} from './models/taskModel.js'

var STORE = Object.assign({}, Backbone.Events, {
	data:{
		tasksCollection: new TasksCollection()
	},
	get: function(prop) {
		if (this.data[prop] === undefined) {
			throw new Error('the store doesn\'t have a property called ' + prop)
		}
		return this.data[prop]
	},

	set: function(attributes) {
		this.data = Object.assign(this.data, attributes)
		this.trigger('dataUpdated')
	}
})

export default STORE