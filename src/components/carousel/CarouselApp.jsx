import React from "react";
import Carousel from "./Carousel";
import { useFetch } from "../custom_hooks";
import { useState, useEffect } from "react";
import CarouselControls from "./CarouselControls";
import Favorites from "./Favorites";

const CarouselApp = () => {
    const [imgs, setImgs] = useState([]);
    const [currSlide, setSlide] = useState(0);
    const [favs, setFavs] = useState([]);
    // const images = "https://jsonplaceholder.typicode.com/photos";
    const images = "https://api.unsplash.com/photos/?client_id=EvbwPmrdG08UtXxcp1vaTyRxcVanAmDf3bFzDVv8nPs";

    useFetch(images, setImgs);

    useEffect(() => {
        if (imgs.length > 0) {
            const favoritesList = imgs.map((img) => img.urls.small);
        }
    }, []);

    const addFavorite = (url) => {
        setFavs([...favs, url]);
    }

    return (
        <div>
            {imgs.length > 0 && <CarouselControls images={imgs} currSlide={currSlide} setSlide={setSlide} />}
            {imgs.length === 0 && <div className="wait">Please wait</div>}
            {imgs.length > 0 && <Carousel images={imgs} currSlide={currSlide} setSlide={setSlide} addFavorite={addFavorite} />}
            {imgs.length > 0 && <Favorites favs={favs} />}
            {/* Favorites List */}
        </div>
    )
}

export default CarouselApp;