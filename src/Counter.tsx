import React, {useState} from 'react';
import {Button} from "./Button";
import s from './Counter.module.css'


export const Counter = () => {


    const IncrementHandler = () => {

    }

    const resetHandler = () => {

    }
    
    return (
        <div className={s.counter}>
            <div className={s.currentValue}>
                <h1 className={''}></h1>
            </div>
            <div className={s.buttons}>
                <Button title={'inc'} click={IncrementHandler}/>
                <Button title={'reset'} click={resetHandler}/>
            </div>
        </div>
    );
};

