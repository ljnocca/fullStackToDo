import Backbone from 'backbone'
import STORE from './store.js'
import {TaskCollection} from './models/taskModel.js'

var ACTIONS = {
	addTask: function(evtObj){
		console.log(evtObj)
		STORE.data.tasksCollection.add({
			taskDescription: evtObj,
			done: false
		})
	}
}

export default ACTIONS