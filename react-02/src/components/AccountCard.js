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
    console.log(this.props);
    let { accountId, acount, initialBalance } = this.props;
    return (
      <div className="card">
        <p>
          <b> Account Name: {this.props.account}</b>
        </p>
        <p>
          <b> Initial Balance: {this.props.initialBalance} </b>
        </p>
        <input
          type="number"
          id="idBalance"
          value={this.state.balance}
          onChange={this.handleOnChange}
        />
        <button
          className="button"
          type="button"
          id="idDeposit"
          value="Deposit"
          onClick={this.handleDeposit}
        ></button>
        <button
          className="button"
          type="button"
          id="idWithdraw"
          value="Withdraw"
          onClick={this.handleWithdraw}
        ></button>
        <button
          className="button"
          type="button"
          id="idDelete"
          value="Delete"
          onClick={this.handleDelete}
        ></button>
      </div>
    );
  }
}

export default AccountCard;
