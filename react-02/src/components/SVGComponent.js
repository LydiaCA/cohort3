import React from 'react';
import imagereact from '../images/logo.svg';
import imagePengin from '../images/large_christmas-penguin.svg';
import imageTictactoe from '../images/tic-tac-toe.svg';
import '../App.css';

class SVGComponent extends React.Component {
	constructor() {
		super();
		
		this.state = {
		  theShowPage: "",
		};
	  }

	render() {
		return (
			<div>
				<img src={imagereact} class="rotate" id="idPenguin1" alt="Christmast Pegiun" width="120" height="120"/>
				<img src={imageTictactoe} class="rotate" id="idPenguin2" alt="Christmast Pegiun" width="100" height="100" onclik={() => this.setState({theShowPage: "<TictactoeComp />"})}/>
				<img src={imagePengin} class="rotate" id="idPenguin3" alt="Christmast Pegiun" width="120" height="120"/>
				<img src={imagePengin} class="rotate" id="idPenguin4" alt="Christmast Pegiun" width="120" height="120"/>
				<img src={imagePengin} class="rotate" id="idPenguin5" alt="Christmast Pegiun" width="120" height="120"/>
				<img src={imagePengin} class="rotate" id="idPenguin6" alt="Christmast Pegiun" width="120" height="120"/>
			</div>
		)
	}
}

export default SVGComponent;