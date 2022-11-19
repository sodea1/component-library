import React, { useState } from 'react';
import "./FlashCard.scss";

const FlashCard = ({ front, back }) => {
    const [facing, setFacing] = useState("front");

    const toggleCard = (e) => {
        e.preventDefault();
        if (facing === "front") {
            setFacing("back");
        } else {
            setFacing("front");
        }
    }

    return (
        <div className='flashcard' onClick={toggleCard}>
            {facing === "front" ? front : back}
        </div>
    )
}

export default FlashCard;