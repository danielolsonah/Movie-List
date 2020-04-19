import React from 'react';
import List from './List.jsx'

class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div id="main">
				<h1>Movie List</h1>
				<List />
			</div>
		)
	}
}

export default App