import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import EvenComponent from './components/EvenComponent';
import OddComponent from './components/OddComponent';
import SVGComponent from './components/SVGComponent';

class App extends React.Component {
  constructor() {
    super();
    this.counter = 21;
    
    this.state = {
      myState: "TBD"
    };
  }

  onPushMe = () => {
    console.log("You pushed me");

    this.counter++;
    console.log("counter is: ", this.counter);

    this.setState({
      myState: "now:" + this.counter
    });


  }

  render() {
    let theShowPage;

    if(Math.abs(this.counter % 2) === 1 ) {
      theShowPage = <OddComponent />;
    } else { 
      theShowPage = <EvenComponent />;
    }

    return (
      <div className="App">
        <SVGComponent />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>I am in control of this application and my name is Lydia {this.counter} {this.state.myState}</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <button onClick={this.onPushMe}>Push Me</button>
        <MyComponent whatToSay={"What Ever"} onPushMe={this.onPushMe}/>
        {theShowPage}
      </div>
    );
  }
}

// class MyComponent extends Component {
//   render() {
//     return <h1>{this.props.greeting}</h1>;
//   }
// }


export default App;
