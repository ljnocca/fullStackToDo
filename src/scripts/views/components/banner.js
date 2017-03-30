import React from 'react'
import ACTIONS from './../../actions.js'

import User from './../../models/userModel.js'


const Banner = React.createClass({
	render: function(){

		var welcomeText = User.getCurrentUser() ? `Welcome ${User.getCurrentUser().get('name')}!` : ''
	 	var	myDoneTasksLink = User.getCurrentUser() ? "#tasks/done/user/" + User.getCurrentUser().get('_id') : ''
	 	var myUndoneTasksLink = User.getCurrentUser() ? "#tasks/undone/user/" + User.getCurrentUser().get('_id') : ''
	 	return (
	 		<div className='banner' >
	 			<h1 id="title">&#10003; TSKR </h1>
	 			<ul className="nav">
	 				<li className="nav-item">
	 					<a href="#login" className="nav-link">
	 						Login / Signup
	 					</a>
	 				</li>
	 				<li className="nav-item">
	 					<a href="#tasks/all" className="nav-link">
	 						All Tasks
	 					</a>
	 				</li>
	 				<li className="nav-item">
	 					<a href={myUndoneTasksLink} className="nav-link">
	 						My Incomplete Tasks
	 					</a>
	 				</li>
	 				<li className="nav-item">
	 					<a href={myDoneTasksLink} className="nav-link">
	 						My Completed Tasks
	 					</a>
	 				</li>
	 				<li className="nav-item">
	 					<a onClick={ACTIONS.logout} className="logoutLink">
	 						Log Out
	 					</a>
	 				</li>
	 			</ul>
	 			<h2>
	 				{welcomeText}
	 			</h2>
	 		</div>
	 	)
 	}
})

export default Banner