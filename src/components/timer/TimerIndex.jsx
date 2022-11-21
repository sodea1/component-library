import React, { useEffect, useState } from "react";
import Timer from "./Timer";

const TimerIndex = ({ timers }) => {
    return (
        <div>
            {timers.map((timer, i) => <Timer 
                key={i}
                hours={timer.hours} 
                minutes={timer.minutes} 
                seconds={timer.seconds} 
                title={timer.title} />
            )}
        </div>
    )
}

export default TimerIndex;