import React, { useState } from 'react';

const FlashForm = ({ setDeck, deck }) => {
    const [front, setFront] = useState("");
    const [back, setBack] = useState("");
    
    const handleFront = (e) => {
        e.preventDefault();
        let nextVal = e.target.value;
        setFront(nextVal);
    }

    const handleBack = (e) => {
        e.preventDefault();
        let nextVal = e.target.value;
        setBack(nextVal);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.front.value)
        if (!e.target.front.value || !e.target.back.value) return;

        let nextCard = {
            "front": e.target.front.value,
            "back": e.target.back.value
        }
        setDeck([nextCard, ...deck]);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="front">
                    Front:
                    <input onChange={handleFront} type="text" name='front' value={front} />
                </label>
                <label htmlFor="back">
                    Back:
                    <input onChange={handleBack} type="text" name='back' value={back} />
                </label>
                <input type='submit' value="Create Flashcard"/>
            </form>
        </div>
    )
};

export default FlashForm;