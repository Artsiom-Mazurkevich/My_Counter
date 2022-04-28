import React, {ChangeEvent} from 'react';
import {Button} from "./Button";
import s from './Installer.module.css';


type InstType = {
    startValue: string
    maxValue: string
    changeStart: (e: string) => void
    changeMax: (e: string) => void
}

export const Installer: React.FC<InstType> = ({startValue,maxValue, changeStart, changeMax}) => {


    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeStart(e.currentTarget.value)
    };
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeMax(e.currentTarget.value)
    };




    const sendStartValue = () => {
        localStorage.setItem('start', startValue)
        localStorage.setItem('max', maxValue)
    };



    return (
        <div className={s.divInstaller}>
            <div className={s.inputs}>
                <div className={s.text}>max value<input value={maxValue}  onChange={onChangeMaxValueHandler} className={''} type="number" /></div>
                <div className={s.text}>start value<input value={startValue} onChange={onChangeStartValueHandler} className={''} type="number" /></div>
            </div>
            <div className={s.buttonInstallValue}>
                <Button title={'set'} click={sendStartValue} />
            </div>
        </div>
    );
};

