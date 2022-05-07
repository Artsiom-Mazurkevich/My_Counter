import React, {ChangeEvent, useEffect} from 'react';
import {Button} from "./Button";
import s from './Installer.module.css';


type InstType = {
    startValue: string
    maxValue: string
    changeStart: (e: string) => void
    changeMax: (e: string) => void
    setN: (e: number) => void

}

export const Installer: React.FC<InstType> = ({startValue,maxValue, changeStart, changeMax,setN}) => {


    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeStart(e.currentTarget.value)
    };
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeMax(e.currentTarget.value)
    };



    const sendStartValue = () => {
        localStorage.setItem('start', startValue)
        localStorage.setItem('max', maxValue)
        setN(+(localStorage.getItem('start'))!)
    };



    return (
        <div className={s.divInstaller}>
            <div className={s.inputs}>
                <div className={s.text}>max value<input value={maxValue}  onChange={onChangeMaxValueHandler} className={s.input} type="number" min={startValue}/></div>
                <div className={s.text}>start value<input value={startValue} onChange={onChangeStartValueHandler} className={s.input} type="number" max={+maxValue - 1} min={'0'}/></div>
            </div>
            <div className={s.buttonInstallValue}>
                <Button title={'set'} click={sendStartValue} />
            </div>
        </div>
    );
};

