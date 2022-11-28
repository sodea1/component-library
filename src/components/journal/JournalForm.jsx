import React, { useState } from "react";

const JournalForm = ({ addEntry, setIsCreating }) => {
    const [text, setText] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addEntry(e.target.date.value, e.target.text.value);
        setIsCreating(false);
        setText("");
        setDate("");
    }

    const handleText = (e) => {
        e.preventDefault();
        setText(e.target.value);
    }

    const handleDate = (e) => {
        e.preventDefault();
        setDate(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="date" name="date" value={date} onChange={handleDate} />
                <input type="textarea" name="text" value={text} onChange={handleText} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default JournalForm;
