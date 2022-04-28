import React from 'react';
import s from './Button.module.css'
import {MouseEvent} from "react";

type ButtonPropsType = {
    click: () => void
    disabled?: boolean
    title: string
}


export const Button: React.FC<ButtonPropsType> = ({click, disabled, title}) => {

    const clickButton = (e: MouseEvent<HTMLButtonElement>) => {
        click()
    }

    return (
        <button onClick={clickButton} disabled={disabled} className={disabled ? s.buttonDisabled : s.button}>{title}</button>
    );
};

