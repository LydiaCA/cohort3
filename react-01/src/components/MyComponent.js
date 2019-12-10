import React from 'react';

class MyComp extends React.Component {
	render() {
		console.log(this.props.whatToSay);
			return (
				<div>
					<h1>Hello World from MyComp</h1>
					<button onClick={this.props.onPushMe}>Push Me</button>
					<p></p>
				</div>
			)
		}
}

export default MyComp;