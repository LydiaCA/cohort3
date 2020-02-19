import React from "react";
import logo from "../images/logo.svg";

class Welcome extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    );
  }
}

export default Welcome;
