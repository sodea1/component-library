import React, { useEffect, useState } from "react";
import { useInterval } from "../custom_hooks";
import TimerForm from "./TimerForm";
import TimerIndex from "./TimerIndex";

const TimerApp = () => {
    const initTimer = {
        title: "boil water",
        hours: 4,
        minutes: 25,
        seconds: 10
    }

    const [timers, setTimers] = useState([initTimer]);

    const addTimer = (newTimer) => {
        let nextTimer = [...timers, newTimer];
        setTimers(nextTimer);
    }

    return (
        <div>
            <TimerForm addTimer={addTimer} />
            <TimerIndex timers={timers} />
        </div>
    )
}

export default TimerApp;