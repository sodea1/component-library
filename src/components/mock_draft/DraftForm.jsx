import React from "react";
import "./DraftForm.scss";

const DraftForm = ({ players, appendRoster }) => {

    const choosePlayer = (e) => {
        e.preventDefault();
        let fullName = e.target.innerHTML;
        
    }

    return (
        <div className="form-wrapper">
            {players.map((player) => {
                return (
                    <div>
                        <button onClick={choosePlayer} className="player-btn">{player.firstName + " " + player.lastName}</button>
                    </div>
                )
            })}
        </div>
    )
}

export default DraftForm;