import React, { useEffect } from "react";
import { useInterval } from "../custom_hooks";
import './styles/Timer.scss';

const Timer = ({ title, hours, minutes, seconds }) => {
    return (
        <div className="timer-container">
            <span>{title}</span>
            <div>
                <span>{hours}</span>:
                <span>{minutes}</span>:
                <span>{seconds}</span>
            </div>
        </div>
    )
}

export default Timer;