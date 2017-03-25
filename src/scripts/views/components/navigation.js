import React from 'react'

var Navigation = React.createClass({
	render: function(){
		return(
			<div className = 'navigation'>
				<button id='all'>All Tasks</button>
				<button id='incomplete'>Incomplete Tasks</button>
				<button id='complete'>Completed Tasks</button>
			</div>
		)
	}
})

export default Navigation