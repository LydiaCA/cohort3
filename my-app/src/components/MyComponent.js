import React from 'react';

class MyComp extends React.Component {
	render() {
		console.log("whatToSay in MyComp: ",this.props.whatToSay);
			return (
				<div>
					<h1>Hello World from MyComp</h1>
				</div>
			)
		}
}

export default MyComp;