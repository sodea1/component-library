import React from "react";
import "./styles/Carousel.scss";

const Carousel = ({ images }) => {


    return (
        <div className="image-container">
            <button>Back 3</button>
            {images.map((img, i) => <img key={i} src={img.url} height="100px" width="100px"></img>)}
            <button>Forward 3</button>
        </div>
    )
}

export default Carousel;