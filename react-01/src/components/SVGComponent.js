import React from 'react';
import imagePengin from '../large_christmas-penguin.svg';
import '../App.css';

class SVGComponent extends React.Component {
	render() {
		return (
			<div>
				<img src={imagePengin} class="rotate" id="idPenguin1" alt="Christmast Pegiun" width="120" height="120"/>
				<img src={imagePengin} class="rotate" id="idPenguin2" alt="Christmast Pegiun" width="120" height="120"/>
				<img src={imagePengin} class="rotate" id="idPenguin3" alt="Christmast Pegiun" width="120" height="120"/>
				<img src={imagePengin} class="rotate" id="idPenguin4" alt="Christmast Pegiun" width="120" height="120"/>
				<img src={imagePengin} class="rotate" id="idPenguin5" alt="Christmast Pegiun" width="120" height="120"/>
				<img src={imagePengin} class="rotate" id="idPenguin6" alt="Christmast Pegiun" width="120" height="120"/>
			</div>
		)
	}
}

export default SVGComponent;