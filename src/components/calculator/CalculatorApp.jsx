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

    const resetClickHandler = (e) => {
        e.preventDefault();

    }

    const invertClickHandler = (e) => {
        e.preventDefault();
    }

    const percentClickHandler = (e) => {
        e.preventDefault();
    }

    const equalsClickHandler = (e) => {
        e.preventDefault();

    }

    const signClickHandler = (e) => {
        e.preventDefault();
        const value = e.target.innerHTML;

        setCalc({
            ...calc,
            sign: value,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num: 0
        });
    }
    
    const commaClickHandler = (e) => {
        e.preventDefault();
    }

    const numClickHandler = (e) => {
        e.preventDefault();
        const value = e.target.innerHTML;

        if (calc.num < 16) {
            setCalc({
                ...calc,
                num: 
                    calc.num === 0 && value === "0"
                    ? "0"
                    // check if positive
                    : calc.num % 1 === 0
                    // string two digits together and conver to number
                    ? Number(calc.num + value)
                    : calc.num + value,
                res: !calc.sign ? 0 : calc.res
            })
        }
    }

    return (
        <div className='calc-app-wrapper'>
            <Screen value={calc.res ? calc.res : calc.num} />
            <ButtonBox>
                {btnVals.flat().map((val, i) => {
                    return (
                        <Button
                            key={i}
                            value={val}
                            className={val === 0 ? "zero" : ""}
                            onClick={
                                val === "C"
                                ? resetClickHandler
                                : val === "+/-"
                                ? invertClickHandler
                                : val === "%"
                                ? percentClickHandler
                                : val === "="
                                ? equalsClickHandler
                                : val === "/" || val === "x" || val === "+" || val === "-"
                                ? signClickHandler
                                : val === "."
                                ? commaClickHandler
                                : numClickHandler 
                            }>
                            {val}
                        </Button>
                    )
                })}
            </ButtonBox>
        </div>
    )
}

export default CalculatorApp;