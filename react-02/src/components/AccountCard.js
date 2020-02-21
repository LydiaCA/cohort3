import React from "react";

class AccountCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balanceInput: "",
      currentBalance: this.props.account.currentBalance
    };
  }

  handleOnChange = (event) => {
    this.setState({
      balance: event.target.value
    });
  };

  handleDeposit = (e) => {
    // Update current balance
    // Rest the input to zero
    this.setState({
      currentBalance: this.props.account.deposit(this.state.balance)
    });

    // this.setState({
    //   idBalance.value = "";
    // })
    // e.target.idBalance.value = "";
  };
  handleWithdraw = () => {};
  handleDeposit = () => {};

  render() {
    console.log(this.props);
    let { accountId, acount, initialBalance } = this.props;
    return (
      <div className="card">
        <p>
          <b> Account Name: {this.props.account.accountName}</b>
        </p>
        <p>
          <b> Current Balance: {this.props.account.currentBalance} </b>
        </p>
        <input
          type="number"
          id="idBalance"
          value={this.state.balance}
          onChange={this.handleOnChange}
        />
        <br />

        <button
          className="button"
          type="button"
          id="idDeposit"
          onClick={this.handleDeposit}
        >
          Deposit
        </button>
        <button
          className="button"
          type="button"
          id="idWithdraw"
          onClick={this.handleWithdraw}
        >
          Withdraw
        </button>
        <button
          className="button"
          type="button"
          id="idDelete"
          onClick={this.handleDelete}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default AccountCard;
