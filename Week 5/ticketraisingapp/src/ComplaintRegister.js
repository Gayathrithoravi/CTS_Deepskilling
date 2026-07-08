import React, { Component } from "react";

class ComplaintRegister extends Component {

    constructor(props) {

        super(props);

        this.state = {
            employeeName: "",
            complaint: ""
        };

    }

    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        });

    }

    handleSubmit = (event) => {

        event.preventDefault();

        const transactionId = Math.floor(Math.random() * 100) + 1;

        alert(
            "Thanks " +
            this.state.employeeName +
            "\nYour Complaint was Submitted.\nTransaction ID is: " +
            transactionId
        );

    }

    render() {

        return (

            <div style={{ textAlign: "center", marginTop: "40px" }}>

                <h1 style={{ color: "red" }}>
                    Register your complaints here!!!
                </h1>

                <form onSubmit={this.handleSubmit}>

                    <table
                        style={{
                            margin: "auto",
                            textAlign: "left"
                        }}
                    >

                        <tbody>

                            <tr>

                                <td>Name:</td>

                                <td>

                                    <input
                                        type="text"
                                        name="employeeName"
                                        value={this.state.employeeName}
                                        onChange={this.handleChange}
                                        required
                                    />

                                </td>

                            </tr>

                            <tr>

                                <td>Complaint:</td>

                                <td>

                                    <textarea
                                        name="complaint"
                                        rows="4"
                                        cols="22"
                                        value={this.state.complaint}
                                        onChange={this.handleChange}
                                        required
                                    />

                                </td>

                            </tr>

                            <tr>

                                <td></td>

                                <td>

                                    <button type="submit">
                                        Submit
                                    </button>

                                </td>

                            </tr>

                        </tbody>

                    </table>

                </form>

            </div>

        );

    }

}

export default ComplaintRegister;