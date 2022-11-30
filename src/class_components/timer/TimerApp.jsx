import React from "react";
import Timer from "./Timer";

class TimerApp extends React.Component {
    state = {
        time: 10
    }

    render() {
        const { time } = this.state;
        return (
            <div>
                <Timer time={time} />
            </div>
        )
    }
}

export default TimerApp;