import React from "react";

const TimerForm = ({}) => {
    const handleTitle = (e) => {
        e.preventDefault();

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // send to TimerIndex
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title
                    <input type="text" onChange={handleTitle} />
                </label>
                <label htmlFor="hours">Hours
                    <input type="text"  />
                </label>
                <label htmlFor="minutes">Minutes
                    <input type="text" />
                </label>
                <label htmlFor="seconds">Seconds
                    <input type="text" />
                </label>
                <input type="submit" />
            </form>
        </div>
    )
}

export default TimerForm;