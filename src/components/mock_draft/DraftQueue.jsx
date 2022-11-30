import React, { useState, useEffect } from "react";
import "./DraftQueue.scss";
import QueueItem from "./QueueItem";

const DraftQueue = ({ teams }) => {
    return (
        <div className="queue-wrapper">
            {teams.map((team, i) => <QueueItem key={i} team={team} nextUp={i === 0 ? true : false} />)}
        </div>
    )
}

export default DraftQueue;