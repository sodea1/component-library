import React, { useState } from "react";
import Journal from "./Journal";
import JournalForm from "./JournalForm";

const JournalApp = () => {
    const [isCreating, setIsCreating] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [entries, setEntries] = useState([]); // arr of {}'s

    const handleEntry = (e) => {
        e.preventDefault();
        setIsCreating(true);
    }

    const addEntry = (date, text) => {
        setEntries([...entries, { date: date, text: text }]);
    }

    const openJournal = (e) => {
        e.preventDefault();
        setIsOpen(true);
    }

    return (
        <div>
            {(!isCreating) ? <button onClick={handleEntry}>Create Entry</button> : <JournalForm addEntry={addEntry} setIsCreating={setIsCreating} />}
            {(!isOpen) ? <button onClick={openJournal}>Open Journal</button> : <Journal entries={entries} setIsOpen={setIsOpen} />}
        </div>
    )
}

export default JournalApp;