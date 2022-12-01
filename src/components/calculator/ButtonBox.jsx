import React from "react";
import './ButtonBox.scss';

const ButtonBox = ({ children }) => {
    

    return (
        <div className="btn-box-wrapper">
            {children}
        </div>
    )
}

export default ButtonBox;