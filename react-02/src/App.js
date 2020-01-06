import React from 'react';
import logo from './images/logo.svg';
import './App.css';
// import MyComponent from './components/MyComponent';
// import TictactoeComp from './components/TictactoeComponent';
import SVGComponent from './components/SVGComponent';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      myState: "TBD",
      theShowPage: ""
    };
  }

  // onPushMe = () => {
  //   console.log("You pushed me");

  //   this.counter++;
  //   console.log("counter is: ", this.counter);

  //   this.setState({
  //     myState: "now:" + this.counter
  //   });
  // }

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
        <SVGComponent />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.state.theShowPage}
      </div>
    );
  }
}

export default App;
