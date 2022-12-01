import React, { useState } from 'react';
import Button from './Button';
import ButtonBox from './ButtonBox';
import './CalculatorApp.scss';
import Screen from './Screen';

// CalculatorApp
    // Screen
    // Button Box
    // Button

// AC/C if All Clear; C to Clear Screen
// AC/C , +/- , % , /
// 7, 8, 9, x
// 4, 5, 6, -
// 1, 2, 3, +
// 0,   ., =

const btnVals = [
    ["C", "+/-", "%", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="]
];

const CalculatorApp = () => {
    const [calc, setCalc] = useState({
        sign: "",
        num: 0,
        res: 0
    });

    return (
        <div className='calc-app-wrapper'>
            <Screen />
            <ButtonBox>
                {btnVals.flat().map((val, i) => {
                    return (
                        <Button
                            key={i}
                            value={val}
                            className={val === 0 ? "zero" : ""}
                            onClick={() => {
                                // event handlers go here
                            }}>
                            {val}
                        </Button>
                    )
                })}
            </ButtonBox>
        </div>
    )
}

export default CalculatorApp;