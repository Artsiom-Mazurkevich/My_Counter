import React, {useEffect, useState} from 'react';
import {Button} from "./Button";
import s from './Counter.module.css'



type CounterType = {
    start: number
    max: string
    setN: (e: number) => void
    m: string
    stv: string
}

export const Counter: React.FC<CounterType> = ({start, max, setN,m ,stv}) => {





    const IncrementHandler = () => {
        setN( +start + 1)
    }

    const resetHandler = () => {
        setN(+stv)
    }
    
    return (
        <div className={s.counter}>
            <div className={s.currentValue}>
                <h1 className={s.number}>{start < 0 ? 'Incorrect Value!' : start}</h1>
            </div>
            <div className={s.buttons}>
                <Button title={'inc'} click={IncrementHandler} disabled={start === +m}/>
                <Button title={'reset'} click={resetHandler}/>
            </div>
        </div>
    );
};

