import React, { useEffect } from "react";
import "./styles/Carousel.scss";
import { AiOutlineHeart } from "react-icons/ai";

const Carousel = ({ images, currSlide, setSlide, addFavorite }) => {
    useEffect(() => {
        const slides = document.querySelectorAll(".slide");
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - currSlide) * 100}%)`;
        });

    }, [currSlide])

    const handleSlide = (e) => {
        e.preventDefault();
        let nextSlide = e.target.innerHTML === "B" ? (currSlide - 3) : (currSlide + 3);
        if (nextSlide < 0 || nextSlide >= images.length) return;
        setSlide(nextSlide);
    }

    const handleFav = (url, e) => {
        e.preventDefault();
        addFavorite(url);
    }

    return (
        <div className="slider-container">
            <div className="slider">
                {images.map((img, i) => {
                    return (
                        <div className="slide" key={i}>
                            {/* for UNSPLASH */}
                            <img src={img.urls.small} height="100px" width="100px"></img>
                            <div className="icon-container">
                                <AiOutlineHeart className="icon" onClick={(e) => handleFav(img.urls.small, e)} />
                            </div>
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