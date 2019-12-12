import React from 'react';
import imagePengin from '../large_christmas-penguin.svg';
import '../App.css';

class SVGComponent extends React.Component {
	render() {
		return (
			<div class="imagetest">
				<img src={imagePengin} class="rotate" alt="Christmast Pegiun"/>
			</div>
		)
	}
}

export default SVGComponent;