import React from "react";

class AccountCard extends React.Component {
  constructor() {
    super();
    this.state = {
      balance: ""
    };
  }

  handleOnChange = (event) => {
    this.setState({
      balance: event.target.value
    });
  };

  handleDeposit = () => {};

  handleWithdraw = () => {};
  handleDeposit = () => {};

  render() {
    return (
      <div className="card">
        <p> Account Name </p>
        <input
          type="number"
          value={this.state.balance}
          onChange={this.handleOnChange}
        />
        <input type="buttton" value="Deposit" onClick={this.handleDeposit} />
        <input type="buttton" value="Withdraw" onClick={this.handleWithdraw} />
        <br />
        <input type="buttton" value="Delete" onClick={this.handleDelete} />
      </div>
    );
  }
}

export default AccountCard;
