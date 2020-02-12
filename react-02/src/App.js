import React from "react";
// import logo from "./images/logo.svg";
import "./App.css";
// import MyComponent from './components/MyComponent';
import AccountComp from "./components/AccountApp";
import TictactoeComp from "./components/TictactoeComponent";
import SVGComponent from "./components/SVGComponent";
import Welcome from "./components/Welcome";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      theShowPage: <Welcome />
    };
  }

  handleIconClick = (id) => {
    console.log(id);
    let showComponent;

    switch (id) {
      case "idTicTacToe":
        showComponent = <TictactoeComp />;
        break;
      case "idAccount":
        showComponent = <AccountComp />;
        break;
      // case "idCities":
      //   showComponent = <CityComponent />;
      //   break;
      // case "idLink":
      //   showComponent = <LinkComponent />;
      //   break;
      // case "idStack":
      //   showComponent = <StackComponent />;
      //   break;
      // case "idStyle":
      //   showComponent = <StyleComponent />;
      //   break;
      default:
        showComponent = <Welcome />;
    }
    this.setState({ theShowPage: showComponent });
  };

  render() {
    // let theShowPage;

    // if(Math.abs(this.counter % 2) === 1 ) {
    //   theShowPage = <OddComponent />;
    // } else {
    //   theShowPage = <EvenComponent />;
    // }
    console.log(this.state.theShowPage);

    return (
      <div className="App">
        <SVGComponent onClick={this.handleIconClick} />
        {this.state.theShowPage}
      </div>
    );
  }
}

export default App;
