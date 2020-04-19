import React from 'react';

class ListComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.name
		}
	}

	render() {
		return (
			<li key={this.props.name} class="listComponent">
				<p>{this.props.name}</p>
			</li>
		)
	}
}

export default ListComponent