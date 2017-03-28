import React from 'react'

var Navigation = React.createClass({
	render: function(){
		return(
			<div className = 'navigation'>
				<a href='#allTasks'>ALL TASKS </a> <br/>
				<a href='#done'>COMPLETE TASKS </a> <br/>
				<a href='#undone'>INCOMPLETE TASKS</a> <br/>
			</div>
		)
	}
})

export default Navigation