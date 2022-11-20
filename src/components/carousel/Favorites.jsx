import React, { useState } from "react";
import { useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";

const Favorites = ({ favs }) => {
    return (
        <div>
            <ul>
                {favs.map((fav, i) => {
                    return <li key={i} className="list-item">
                        <img src={fav} height="100px" width="100px">
                            
                        </img>
                        <div className="icon-container">
                            <AiOutlineHeart className="icon" />
                        </div>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Favorites;