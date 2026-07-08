import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Rohit Sharma", score: 90 },
        { name: "Virat Kohli", score: 82 },
        { name: "Shubman Gill", score: 65 },
        { name: "KL Rahul", score: 72 },
        { name: "Hardik Pandya", score: 58 },
        { name: "Ravindra Jadeja", score: 77 },
        { name: "Rishabh Pant", score: 69 },
        { name: "Mohammed Shami", score: 45 },
        { name: "Jasprit Bumrah", score: 73 },
        { name: "Kuldeep Yadav", score: 60 },
        { name: "Mohammed Siraj", score: 80 }
    ];

    const lowScorers = players.filter(player => player.score < 70);

    return (

        <div>

            <h2>List of Players</h2>

            <table border="1" cellPadding="8">

                <thead>

                    <tr>

                        <th>Player</th>

                        <th>Score</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        players.map((player, index) => (

                            <tr key={index}>

                                <td>{player.name}</td>

                                <td>{player.score}</td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

            <br />

            <h2>Players Scoring Below 70</h2>

            <ul>

                {
                    lowScorers.map((player, index) => (

                        <li key={index}>
                            {player.name} - {player.score}
                        </li>

                    ))
                }

            </ul>

        </div>

    );

}

export default ListofPlayers;