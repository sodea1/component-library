import React from "react";
import Carousel from "./Carousel";
import { useFetch } from "../custom_hooks";
import { useState } from "react";
import CarouselControls from "./CarouselControls";

const CarouselApp = () => {
    const [imgs, setImgs] = useState([]);
    const [currSlide, setSlide] = useState(0);
    // const images = "https://jsonplaceholder.typicode.com/photos";
    const images = "https://api.unsplash.com/photos/?client_id=EvbwPmrdG08UtXxcp1vaTyRxcVanAmDf3bFzDVv8nPs";

    useFetch(images, setImgs);

    return (
        <div>
            {imgs.length > 0 && <CarouselControls images={imgs} currSlide={currSlide} setSlide={setSlide} />}
            {imgs.length === 0 && <div className="wait">Please wait</div>}
            {imgs.length > 0 && <Carousel images={imgs} currSlide={currSlide} setSlide={setSlide} />}
            {/* Favorites List */}
        </div>
    )
}

export default CarouselApp;