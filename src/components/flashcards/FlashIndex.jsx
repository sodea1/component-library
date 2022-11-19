import React, { useState } from 'react';
import FlashCard from './FlashCard';
import FlashForm from './FlashForm';
import './FlashIndex.scss';

const FlashIndex = () => {
    const initCard = {
        "front": "",
        "back": ""
    }

    const [deck, setDeck] = useState([initCard]);

    return (
        <div>
            <FlashForm setDeck={setDeck} deck={deck} />
            <div className='card-index'>
                {deck.map((card, i) => {
                    if (i !== deck.length - 1) {
                        return <FlashCard key={i} front={card["front"]} back={card["back"]} />
                    }
                })}
            </div>
        </div>
        
    )
}

export default FlashIndex;