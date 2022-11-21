import React, { useState } from "react";

const TimerForm = ({ addTimer }) => {
    const [title, setName] = useState("");
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const handleTitle = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const handleHours = (e) => {
        e.preventDefault();
        // if (Number(e.target.value) > 23 || e.target.value < 0) return;
        setHours(e.target.value)
    }

    const handleMinutes = (e) => {
        e.preventDefault();
        // if (e.target.value > 59 || e.target.value < 0) return;
        setMinutes(e.target.value)
    }

    const handleSeconds = (e) => {
        e.preventDefault();
        // if (e.target.value > 59 || e.target.value < 0) return;
        setSeconds(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // send to TimerIndex
        let newTimer = {
            title: title,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        }

        addTimer(newTimer);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title
                    <input type="text" name="title" value={title} onChange={handleTitle} />
                </label>
                <label htmlFor="hours">Hours
                    <input type="number" min="0" max="23" onChange={handleHours} />
                </label>
                <label htmlFor="minutes">Minutes
                    <input type="number" min="0" max="59" onChange={handleMinutes} />
                </label>
                <label htmlFor="seconds">Seconds
                    <input type="number" min="0" max="59" onChange={handleSeconds} />
                </label>
                <input type="submit" />
            </form>
        </div>
    )
}

export default TimerForm;