import React from "react";
import './Roster.scss';

const Roster = ({ teams, rosters }) => {
    return (
        <div className="roster-grid">
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