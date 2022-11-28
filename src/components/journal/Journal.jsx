import React, { useEffect, useState } from "react";

const Journal = ({ entries, setIsOpen }) => {
    const [sortedEntries, setSortedEntries] = useState(entries);
    const [entryIdx, setEntryIdx] = useState(0);

    useEffect(() => {
        entries.sort();
        setSortedEntries(entries);
    }, [])

    const handleNext = (e) => {
        e.preventDefault();
        setEntryIdx(entryIdx + 1);
    }

    const handlePrevious = (e) => {
        e.preventDefault();
        setEntryIdx(entryIdx - 1);
    }

    const handleClose = (e) => {
        e.preventDefault();
        setIsOpen(false);
    }

    return (
        <div>
            <button disabled={(entryIdx === 0) ? true : false} onClick={handlePrevious}>Back</button>
            <div>
                <span>{sortedEntries[entryIdx].date}</span>
                <span>{sortedEntries[entryIdx].text}</span>
            </div>
            <button disabled={(entryIdx === sortedEntries.length - 1) ? true : false} onClick={handleNext}>Next</button>
            <button onClick={handleClose}>Close</button>
        </div>
    )
}

export default Journal;