import React form "react";
import Accout from "./AccountCard.js";

class AccountApp extends React.component {
	construct() {
		super();
		this.state = {
		accountName:"",
		startingAmount:0,	
		}
	}

render() {
	return (
		<div className="panel-primary">
            <h1> Bank Accounts </h1>
            <div className="left-panel" id="idLeftPanel">
                <b>Acccount Name: </b>
                <input 
                    type="text"
                    name="accountName"
                    value={this.state.accountName}
                    onChnage={this.handleInputChnage}    
                />
                <br />
                <b>Amount: </b>
                <input
                    type="text"
                    name="startingAmount"
                    value={this.state.startingAmount}
                    onChnage={this.handleInputChnage}  
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

	)
}

}