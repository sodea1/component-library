import React from "react";
import Carousel from "./Carousel";
import { useFetch } from "../custom_hooks";
import { useState } from "react";

const CarouselApp = () => {
    const [imgs, setImgs] = useState([]);
    const images = "https://jsonplaceholder.typicode.com/photos";

    useFetch(images, setImgs);

    return (
        <div>
            {/* Controls */}
            {imgs.length === 0 && <div className="wait">Please wait</div>}
            {imgs.length > 0 && <Carousel images={imgs} />}
            {/* Favorites List */}
        </div>
    )
}

export default CarouselApp;