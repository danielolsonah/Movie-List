import React from 'react';
import ListComponent from './ListComponent.jsx'

class List extends React.Component {
	constructor() {
		super();
	}

	render() {
		var fakeList = ["Die Hard", "The Lion King", "Mamma Mia"];
		return (
			<ul id="list">
				{fakeList.map((movieName) => 
					<ListComponent name={movieName} />
				)}
			</ul>
		)
	}
}

export default List