import React from "react";
import "./DraftForm.scss";

const DraftForm = ({ players, setPlayers, setTeams, teams, appendRoster, setCurrentPick, currentPick }) => {

    const choosePlayer = (e) => {
        e.preventDefault();

        // UPDATE ROSTER
        let fullName = e.target.innerHTML;
        appendRoster(fullName);
        
        // UPDATE PLAYERS TO REMOVE SELECTED PLAYER FROM DRAFT
        let updatedPlayers = players;
        let playerID = e.target.dataset.id;
        for (let i = 0; i < updatedPlayers.length; i++) {
            if (updatedPlayers[i].id.toString() === playerID) {
                updatedPlayers = updatedPlayers.slice(0, i).concat(updatedPlayers.slice(i + 1));
                break;
            }
        };
        setPlayers(updatedPlayers);

        // UPDATE TEAMS TO REORDER THE QUEUE & SET THE PICK NUMBER
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
                        <button onClick={choosePlayer} data-id={player.id} className="player-btn">{player.firstName + " " + player.lastName}</button>
                    </div>
                )
            })}
        </div>
    )
}

export default DraftForm;