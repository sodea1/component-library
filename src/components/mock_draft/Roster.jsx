import React from "react";

const Roster = ({ teams, rosters }) => {
    console.log(teams)
    console.log(rosters)
    return (
        <div>
            {rosters.map((roster, i) => {   
                return (
                    <div key={i}>
                        <h1>{teams[i]}</h1>
                        <ul>
                            {roster[teams[i]].players.map((player, idx) => {
                                return (
                                    <li key={idx}>{player}</li>
                                )
                            })}
                        </ul>
                    </div>                   
                )
            })}
        </div>
    )
}

export default Roster;