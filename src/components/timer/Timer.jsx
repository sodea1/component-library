import React, { useEffect, useState } from "react";
import { useInterval } from "../custom_hooks";
import './styles/Timer.scss';

const Timer = ({ title, hours, minutes, seconds }) => {
    const [taskTitle, setTitle] = useState(title);
    const [hrs, setHours] = useState(hours);
    const [mins, setMinutes] = useState(minutes);
    const [secs, setSeconds] = useState(seconds);
    const [isPlaying, setIsPlaying] = useState(true);

    const decrementTimer = () => {
        let hh = Number(hrs);
        let mm = Number(mins);
        let ss = Number(secs);
        // set Interval: callback will return new time 1 second less
        if (ss === 0 && mm === 0 && hh === 0) {
            // delete timer
            console.log("timer expired");
        } else if (ss === 0 && mm === 0 && hh !== 0) {
            hh -= 1;
            mm = 59;
            ss = 59;
            setHours(hh);
            setMinutes(mm);
            setSeconds(ss);
        } else if (ss === 0 && mm !== 0) {
            mm -= 1;
            ss = 59;
            setSeconds(ss);
            setMinutes(mm);
        } else if (ss !== 0) {
            ss -= 1;
            setSeconds(ss);
        }
    }

    useInterval(decrementTimer, isPlaying ? 1000 : null);

    const expire = () => {

    }

    if (!hours && !minutes && !seconds) {
        expire();
    }

    const togglePlay = (e) => {
        e.preventDefault();
        setIsPlaying(isPlaying ? false : true);
    }

    return (
        <div className="timer-container">
            <span>{taskTitle}</span>
            <div>
            <button onClick={togglePlay}>{isPlaying ? "Pause" : "Resume"}</button>
                <span>{hrs}</span>:
                <span>{mins}</span>:
                <span>{secs}</span>
            </div>
        </div>
    )
}

export default Timer;