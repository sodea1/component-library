import React from "react";
import "./DraftQueue.scss";

const DraftQueue = ({ teams }) => {
    return (
        <div className="queue-wrapper">
            {teams.map((team, i) => <span key={i}>{team}</span>)}
        </div>
    )
}

export default DraftQueue;