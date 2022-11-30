import React from "react";
import "./QueueItem.scss";

const QueueItem = ({ team, nextUp }) => {
    return (
        <div className="item-wrapper">
            {(nextUp) ? `Next Up: ${team}` : team}
        </div>
    )
}

export default QueueItem;