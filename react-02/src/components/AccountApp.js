import React from "react";
import "../Account.css";
import AccountCard from "./AccountCard.js";
import { AccountController } from "./account.js";

class AccountApp extends React.Component {
  constructor() {
    super();
    this.state = {
      accountName: "",
      startingAmount: 0
    };
    this.accountController = new AccountController();
  }

  addAccount = () => {
    //minor validaition
    //get values from inputs
    //call pojo create handler
    this.accountController.addAccount(
      this.state.accountName,
      this.state.startingAmount
    );
    this.setState({
      accountName: "",
      startingAmount: 0
    });
  };

  renderCards = () => {
    let accountList = [];
    for (let account of this.accountController.userAccounts) {
      console.log(account);
      accountList.push(
        <AccountCard key={account.accountId} account={account} />
      );
    }

    return accountList;
  };

  handleInputChange = (event) => {
    //set input state
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.value);
  };

  render() {
    return (
      <div className="panel-primary" id="idPrimary">
        <h1> Accounts </h1>
        <div className="left-panel" id="idLeftPanel">
          <b>Account Name: </b>{" "}
          <input
            type="text"
            name="accountName"
            value={this.state.accountName}
            onChange={this.handleInputChange}
          />
          <br />
          <b>Amount: </b>{" "}
          <input
            type="number"
            name="startingAmount"
            value={this.state.startingAmount}
            onChange={this.handleInputChange}
          />
          <div id="buttonDiv">
            <button
              className="button"
              type="button"
              id="idAddAccount"
              onClick={this.addAccount}
            >
              Add Account
            </button>
          </div>
        </div>
        <div className="right-panel" id="idRightPanel">
          <p>
            <b> Account List </b>
          </p>
          {this.renderCards()}
        </div>
      </div>
    );
  }
}

export default AccountApp;
