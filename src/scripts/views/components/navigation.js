import React from 'react'

var Navigation = React.createClass({
	render: function(){
		return(
			<div className = 'navigation'>
				<a href='#allTasks'>ALL TASKS </a>
				<a href='#done'>COMPLETE TASKS </a>
				<a href='#undone'>INCOMPLETE TASKS</a>
			</div>
		)
	}
})

export default Navigation