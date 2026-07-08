import React, { Component } from "react";

class Getuser extends Component {

    constructor(props) {

        super(props);

        this.state = {

            person: null

        };

    }

    async componentDidMount() {

        const response = await fetch("https://api.randomuser.me/");

        const data = await response.json();

        this.setState({

            person: data.results[0]

        });

    }

    render() {

        const { person } = this.state;

        if (!person) {

            return <h2>Loading...</h2>;

        }

        return (

            <div style={{ marginLeft: "120px", marginTop: "80px" }}>

                <h1>

                    {person.name.title}{" "}
                    {person.name.first}{" "}
                    {person.name.last}

                </h1>

                <img
                    src={person.picture.large}
                    alt="User"
                />

            </div>

        );

    }

}

export default Getuser;