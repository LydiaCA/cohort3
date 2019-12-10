import React from 'react';

class EvenComponent extends React.Component {
	render() {
		console.log(this.props.whatToSay);
			return (
				<div>
					<h1>Hello World from EvenComponent </h1>
				</div>
			)
		}
}

export default EvenComponent;