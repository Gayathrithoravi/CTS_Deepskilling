import React, { Component } from "react";

class CountPeople extends Component {

    constructor(props) {
        super(props);

        this.state = {
            entryCount: 0,
            exitCount: 0
        };
    }

    UpdateEntry = () => {
        this.setState({
            entryCount: this.state.entryCount + 1
        });
    }

    UpdateExit = () => {
        this.setState({
            exitCount: this.state.exitCount + 1
        });
    }

    render() {

        return (

            <div style={{ textAlign: "center", marginTop: "50px" }}>

                <h2>Mall Entry Counter</h2>

                <h3>People Entered : {this.state.entryCount}</h3>

                <button onClick={this.UpdateEntry}>
                    Login
                </button>

                <br /><br />

                <h3>People Exited : {this.state.exitCount}</h3>

                <button onClick={this.UpdateExit}>
                    Exit
                </button>

            </div>

        );

    }
}

export default CountPeople;