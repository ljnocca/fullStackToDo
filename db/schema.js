const mongoose = require('mongoose');

// ----------------------
// USERS
// ----------------------
const usersSchema = new mongoose.Schema({
  // required for authentication: DO NOT TOUCH Or You May Get Punched
  email:     { type: String, required: true },
  password:  { type: String, required: true },
  // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x
  
   // example of optional fields
  name:      { type: String, required: true },
  createdAt: { type: Date, default: Date.now }

})

const taskSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userId: {type: String, required: true},
	task: { type: String, required: true },
	done: {type: Boolean, default: false },
	createdAt: { type: Date, default: Date.now }
})

module.exports = {
  User: mongoose.model('User', usersSchema),
  Task: mongoose.model('Task', taskSchema)
}
