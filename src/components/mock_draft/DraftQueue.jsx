import React, { useState, useEffect } from "react";
import "./DraftQueue.scss";
import QueueItem from "./QueueItem";

const DraftQueue = ({ teams, currTeamIdx }) => {
    // const [orderedTeams, setOrderedTeams] = useState([]);

    // useEffect(() => {
    //     let teamsArrCopy = teams;
    //     let copyIdx = currTeamIdx;
    //     if (copyIdx !== 0) {
    //         // reorder the queue
    //         while (copyIdx > 0) {
    //             teamsArrCopy.push(teamsArrCopy.shift());
    //             copyIdx--;
    //         }
    //     }
    //     setOrderedTeams(teamsArrCopy);
    // }, [])

    return (
        <div className="queue-wrapper">
            {teams?.map((team, i) => <QueueItem key={i} team={team} nextUp={i === 0 ? true : false} />)}
        </div>
    )
}

export default DraftQueue;