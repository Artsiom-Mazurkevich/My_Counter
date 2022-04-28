import React, {useEffect, useState} from 'react';
import './App.css';
import {Installer} from "./Installer";
import {Counter} from "./Counter";


function App() {
    const start = localStorage.getItem('start' || '0')!
    const max = localStorage.getItem('max' || '0')!

    const [maxValue, setMaxValue] = useState<string>(max)
    const [startValue, setStartValue] = useState<string>(start)
    const changeMax = (e: string) => {
        setMaxValue(e)
    }
    const changeStart = (e: string) => {
        setStartValue(e)
    }


    useEffect(() => {
        setMaxValue(max)
        setStartValue(start)
    }, [max, start])







    return (
        <div className={"app"}>
            <Installer startValue={startValue} maxValue={maxValue} changeStart={changeStart} changeMax={changeMax}/>
            <Counter />
        </div>
    );
}

export default App;
