import React from "react";
import "./DraftForm.scss";

const DraftForm = ({ players, setTeams, teams, appendRoster, setCurrentPick, currentPick }) => {

    const choosePlayer = (e) => {
        e.preventDefault();
        let fullName = e.target.innerHTML;
        appendRoster(fullName);
        let updatedTeams = teams;
        updatedTeams.push(updatedTeams.shift());
        setCurrentPick(currentPick + 1);
        setTeams(updatedTeams);
    }

    return (
        <div className="form-wrapper">
            {players.map((player, i) => {
                return (
                    <div key={i}>
                        <button onClick={choosePlayer} className="player-btn">{player.firstName + " " + player.lastName}</button>
                    </div>
                )
            })}
        </div>
    )
}

export default DraftForm;