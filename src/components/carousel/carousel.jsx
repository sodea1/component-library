import React, { useState, useEffect } from "react";
import { useInterval } from "../custom_hooks";
import "./styles/Carousel.scss";

const Carousel = ({ images }) => {
    const [currSlide, setSlide] = useState(0);

    useEffect(() => {
        const slides = document.querySelectorAll(".slide");
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - currSlide) * 100}%)`;
        });

    }, [currSlide])

    useInterval(() => setSlide((currSlide + 3) % images.length), 2000);

    const handleSlide = (e) => {
        e.preventDefault();
        let nextSlide = e.target.innerHTML === "B" ? (currSlide - 3) : (currSlide + 3);
        if (nextSlide < 0 || nextSlide >= images.length) return;
        setSlide(nextSlide);
    }

    return (
        <div className="slider-container">
            <div className="slider">
                {images.map((img, i) => {
                    return (
                        <div className="slide" key={i}>
                            {/* for UNSPLASH */}
                            <img src={img.urls.small} height="100px" width="100px"></img>
                            {/* for sample JSON */}
                            {/* <img src={img.url} ></img> */}
                        </div>
                    )})
                }
                <button onClick={handleSlide} className="btn btn-prev">B</button>
                <button onClick={handleSlide} className="btn btn-next">F</button>
            </div>
        </div>
    )
}

export default Carousel;