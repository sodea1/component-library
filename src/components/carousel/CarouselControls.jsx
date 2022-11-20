import React, { useState } from "react";
import { useInterval } from "../custom_hooks";

const CarouselControls = ({ images, currSlide, setSlide }) => {
    const [isRunning, setRunning] = useState(false);
    let delay = 2000;

    useInterval(() => setSlide((currSlide + 3) % images.length), isRunning ? delay : null);

    const handleIncrementalSlide = (e) => {
        e.preventDefault();
        setRunning(isRunning ? false : true)
    }
    
    return (
        <div>
            <button onClick={handleIncrementalSlide}>
                {isRunning ? "Deactivate Auto-Slide" : "Activate Auto-Slide"}
            </button>
        </div>
    )
}

export default CarouselControls;